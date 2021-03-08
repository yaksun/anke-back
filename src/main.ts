import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { HttpExceptionFilter } from './common/error/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret: 'secret', // 对session id 相关的cookie 进行签名
    resave: true,
    saveUninitialized: true, // 是否保存未初始化的会话
    cookie: {
      maxAge: 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
  }));

  //全局验证管道
  app.useGlobalPipes(new ValidationPipe())
  const options = new DocumentBuilder()
  .setTitle('anki')
  .setDescription('这是一个新的世界')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

    // 全局注册拦截器
    // app.useGlobalInterceptors(new TransformInterceptor());

    app.useGlobalFilters(new HttpExceptionFilter());
   // 允许跨域
   app.enableCors();
    await app.listen(3000);
}
bootstrap();
