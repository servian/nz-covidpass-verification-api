import { Module } from '@nestjs/common';
import { VerificationModule } from './verification/verification.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), VerificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
