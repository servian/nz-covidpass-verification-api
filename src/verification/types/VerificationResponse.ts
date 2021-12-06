import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class VerificationResponse {
  verified: boolean;
  metadata?: any;
  error?: any;
  message?: any;
}

export class VerificationResponseVerified {
  @ApiProperty({
    default: true,
  })
  verified: boolean;
  @ApiPropertyOptional({
    nullable: true,
    default: {
      header: {
        kid: 'z12Kf7UQ',
        alg: 'ES256',
      },
      payload: {
        iss: 'did:web:nzcp.identity.health.nz',
        exp: 1652011200,
        nbf: 1636369200,
        jti: 'urn:uuid:a71caae4-44dd-4408-9d0d-c2eadc0185e6',
        vc: {
          '@context': [
            'https://www.w3.org/2018/credentials/v1',
            'https://nzcp.covid19.health.nz/contexts/v1',
          ],
          version: '1.0.0',
          type: ['VerifiableCredential', 'PublicCovidPass'],
          credentialSubject: {
            givenName: 'John',
            familyName: 'Doe',
            dob: '1983-03-28',
          },
        },
      },
    },
  })
  metadata?: any;
}
export class VerificationResponseNotVerified {
  @ApiProperty({
    default: false,
  })
  verified: boolean;
  @ApiPropertyOptional({
    default: 'verification failure',
  })
  error?: any;
  @ApiPropertyOptional({
    default: 'reason for failure',
  })
  message?: any;
}
