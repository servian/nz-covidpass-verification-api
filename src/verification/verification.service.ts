import { Injectable } from '@nestjs/common';
import { VerificationRequest } from './types/VerificationRequest';
import { VerificationResponse } from './types/VerificationResponse';
import base32Decode from 'base32-decode';
import cbor from 'cbor';
import cose from 'cose-js';
import axios from 'axios';
import { VerificationError } from './error';

@Injectable()
export class VerificationService {
  async verify(
    verificationRequest: VerificationRequest,
  ): Promise<VerificationResponse> {
    try {
      const requestPayload = verificationRequest.payload.split('/');
      const decodedBuffer = await this.base32Decode(requestPayload);

      const cborArray = await this.cborDecode(decodedBuffer);
      const header = await this.decodeHeaders(cborArray[0].value[0]);
      const payload = await this.decodePayload(cborArray[0].value[2]);

      const jwk = await this.resolveIdentityWithIssuer(header, payload);
      await this.verifySignature(jwk, decodedBuffer);

      return {
        verified: true,
        metadata: {
          header: header,
          payload: payload,
        },
      };
    } catch (e) {
      let message, error;
      if (e instanceof VerificationError) {
        message = e.message;
        error = 'verification failure';
      } else {
        const errorId = new Date().getTime().toString(36);
        console.log(`Fatal Error: ${errorId}`, e);
        message = `An unknown error occurred. Please contact the administrator with ref: ${errorId}.`;
        error = 'Internal Server Error';
      }
      return {
        verified: false,
        message: [message],
        error: error,
      };
    }
  }

  async base32Decode(requestPayload) {
    try {
      return base32Decode(requestPayload[requestPayload.length - 1], 'RFC4648');
    } catch (e) {
      throw new VerificationError('unable to base32 decode');
    }
  }

  async cborDecode(decodedBuffer) {
    try {
      return await cbor.decodeAll(decodedBuffer);
    } catch (e) {
      throw new VerificationError('unable to decode cbor');
    }
  }

  async decodeHeaders(buffer: ArrayBuffer) {
    try {
      const decodedPayload = await cbor.decodeAll(buffer);
      const decodedHeaderObject = Object.fromEntries(decodedPayload[0]);
      const kidBuffer = decodedHeaderObject[4];
      const algVal = decodedHeaderObject[1];
      const kidVal = new Buffer(kidBuffer).toString();

      // Hard coded because: https://nzcp.covid19.health.nz/#cwt-headers
      if (algVal === -7 && kidVal !== null) {
        return {
          kid: kidVal,
          alg: 'ES256',
        };
      } else {
        throw new VerificationError('unable to extract headers');
      }
    } catch (e) {
      if (e instanceof VerificationError) {
        throw new VerificationError(e.message);
      } else {
        throw new VerificationError('unable to decode headers');
      }
    }
  }

  async decodePayload(buffer: ArrayBuffer) {
    try {
      const decodedPayload = await cbor.decodeAll(buffer);
      const decodedPayloadObject = Object.fromEntries(decodedPayload[0]);
      const hexUiid =
        'urn:uuid:' +
        this.formatHex2Uiid(this.buffer2hex(decodedPayloadObject[7]));
      const expiryDate = new Date(decodedPayloadObject[4] * 1000);
      const notValidBefore = new Date(decodedPayloadObject[5] * 1000);

      if (new Date().getTime() - expiryDate.getTime() > 0) {
        throw new VerificationError('pass expired');
      }

      if (new Date().getTime() - notValidBefore.getTime() < 0) {
        throw new VerificationError('pass not yet active');
      }
      return {
        iss: decodedPayloadObject[1],
        exp: decodedPayloadObject[4],
        nbf: decodedPayloadObject[5],
        jti: hexUiid,
        vc: decodedPayloadObject['vc'],
      };
    } catch (e) {
      if (e instanceof VerificationError) {
        throw new VerificationError(e.message);
      } else {
        throw new VerificationError('unable to decode payload');
      }
    }
  }

  formatHex2Uiid(hex) {
    const lengths = [8, 4, 4, 4, 12];
    const parts = [];
    let range = 0;
    for (let i = 0; i < lengths.length; i++) {
      parts.push(hex.slice(range, range + lengths[i]));
      range += lengths[i];
    }
    return parts.join('-');
  }

  buffer2hex(buffer) {
    return [...new Uint8Array(buffer)]
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('');
  }

  async resolveIdentityWithIssuer(headers, payload) {
    const kid = headers.kid;
    const iss = payload.iss;
    const absoluteKeyReference = `${iss}#${kid}`;

    const authority = await axios.get(process.env.AUTHORITY_URL).catch((e) => {
      console.log(e);
      throw new VerificationError('unable to fetch authority DID');
    });

    const authorityData = authority.data;

    if (iss !== authorityData.id) {
      throw new VerificationError(
        'not a new zealand ministry of health trusted issuer',
      );
    }

    if (!authorityData['assertionMethod'].includes(absoluteKeyReference)) {
      throw new VerificationError('absolute key mismatch');
    }

    if (
      !(authorityData['verificationMethod'][0]['type'] === 'JsonWebKey2020')
    ) {
      throw new VerificationError('verification method failure');
    }

    return authorityData['verificationMethod'][0]['publicKeyJwk'];
  }

  async verifySignature(jwk, decodedBuffer) {
    const verifier = {
      key: {
        x: Buffer.from(Buffer.from(jwk.x, 'base64').toString('hex'), 'hex'),
        y: Buffer.from(Buffer.from(jwk.y, 'base64').toString('hex'), 'hex'),
      },
    };
    try {
      await cose.sign.verify(decodedBuffer, verifier);
    } catch (e) {
      throw new VerificationError('elliptical signature verification failed');
    }
  }
}
