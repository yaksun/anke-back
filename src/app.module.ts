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


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'123456',
      database:'anki',
      entities:[Card,Cate,User,Role,Auth],
      synchronize:true,
      logging:true

    }),
    CardModule,
    CateModule,
    UserModule,
    RoleModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
