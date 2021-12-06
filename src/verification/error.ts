import { Logger } from '@nestjs/common';

export class VerificationError extends Error {
  private readonly logger = new Logger(VerificationError.name);

  constructor(message) {
    super(message);
    this.name = 'VerificationError';
    this.logger.error(message);
  }
}
