import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { CardModule } from './card/card.module';
import { Card } from './card/card.entity';
import { CateModule } from './cate/cate.module';
import {Cate} from './cate/cate.entity'


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'123456',
      database:'anki',
      entities:[Card,Cate],
      synchronize:true,
      logging:true

    }),
    CardModule,
    CateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
