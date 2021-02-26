import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import config from '../../config/config';

@Module({
    imports: [
        JwtModule.register({
            secret: 'marvin',
            signOptions: {
              expiresIn: config.tokenSetTimeOut,
            },
          }),
        TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
    exports:[TypeOrmModule]
})
export class UserModule {}
