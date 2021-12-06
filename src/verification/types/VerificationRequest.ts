import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { PayloadValidator } from '../validations/payload.validation';
import { ApiProperty } from '@nestjs/swagger';

export class VerificationRequest {
  @IsNotEmpty()
  @IsString()
  @Validate(PayloadValidator)
  @ApiProperty({
    description:
      'payload as a string in format: NZCP:/{version}/{base32-encoded-string}',
    default: 'NZCP:/{version}/{base32-encoded-string}',
  })
  payload: string;
}
