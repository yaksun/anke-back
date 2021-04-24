import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { CardModule } from './card/card.module';
import { Card } from './card/card.entity';
import { CateModule } from './cate/cate.module';
import {Cate} from './cate/cate.entity'
import { UserModule } from './user/user.module';
import {User} from './user/user.entity'
import { RoleModule } from './role/role.module';
import {Role} from './role/role.entity'
import { AuthModule } from './auth/auth.module';
import {Auth} from './auth/auth.entity'
import { MulterModule } from '@nestjs/platform-express';
import dayjs = require('dayjs');
import { diskStorage } from 'multer';
import * as nuid from 'nuid';
var moment = require('moment')
var path = require('path')
import {CateService} from './cate/cate.service'
import { MoneyModule } from './money/money.module';
import { Money } from './money/money.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'123456',
      database:'cg_back',
      entities:[Card,Cate,User,Role,Auth,Money],
      synchronize:true,
      logging:true

    }),
    MulterModule.register({
      storage: diskStorage({
        //自定义路径
        destination: `./uploads`,
        filename: (req, file, cb) => {
          // 自定义文件名
          // const filename = `${nuid.next()}.${file.mimetype.split('/')[1]}`;
          // return cb(null, filename);

            // 当前时间
            var ttt = moment(new Date()).format('YYYYMMDDHHMMss')
            // 5位随机数
            var ran = parseInt(Math.random()*89999+10000+'')
            // // 扩展名 文件后缀名
            var extname = path.extname(file.originalname)
            
            var newPath =ttt+ran+extname
            
          return  cb(null, newPath);
        }
      }),
    }),
    CardModule,
    CateModule,
    UserModule,
    RoleModule,
    AuthModule,
    MoneyModule
  ],
  controllers: [AppController],
  providers: [AppService,CateService],
})
export class AppModule {

}

