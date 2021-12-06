import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  VerificationResponse,
  VerificationResponseNotVerified,
  VerificationResponseVerified,
} from './types/VerificationResponse';
import { VerificationRequest } from './types/VerificationRequest';
import { VerificationService } from './verification.service';
import {
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import fs from 'fs';

@Controller('nzcp/v1')
@ApiExtraModels(VerificationResponseNotVerified, VerificationResponseVerified)
export class VerificationController {
  constructor(private verificationService: VerificationService) {}

  @Post('verify')
  @ApiTags('verification')
  @ApiOperation({
    summary: 'Verify a NZ Covid pass payload',
    description: fs.readFileSync(
      __dirname + '/documentation/verifyDescription.html',
      'utf-8',
    ),
  })
  @ApiResponse({
    status: 200,
    schema: {
      oneOf: [
        { $ref: getSchemaPath(VerificationResponseVerified) },
        { $ref: getSchemaPath(VerificationResponseNotVerified) },
      ],
    },
  })
  @ApiResponse({
    status: 400,
    schema: {
      example: {
        statusCode: 400,
        message: [
          'payload should match the pattern: NZCP:/{version}/{base32-encoded-string}',
        ],
        error: 'Bad Request',
      },
    },
  })
  @HttpCode(200)
  async verify(
    @Body() verificationRequest: VerificationRequest,
  ): Promise<VerificationResponse> {
    return await this.verificationService.verify(verificationRequest);
  }
}
