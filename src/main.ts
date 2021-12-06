import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('NZCP Verify')
    .setDescription(
      'Verify a New Zealand COVID Pass (NZCP) issued by the New Zealand Ministry of Health using a ' +
        'payload of a string.',
    )
    .setVersion('1.0')
    .addTag('verification')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document, {
    customCss: '.topbar { display: none; }',
  });
  await app.listen(3000);
}
bootstrap();
