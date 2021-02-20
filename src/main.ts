import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //全局验证管道
  app.useGlobalPipes(new ValidationPipe())
  const options = new DocumentBuilder()
  .setTitle('anki')
  .setDescription('这是一个新的世界')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
