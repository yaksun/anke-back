import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import {JwtPayloadToken} from './interfface';


@Injectable()
export class UserService {
  
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>,
        private readonly jwtService: JwtService
    ){
       
    }

    /**
     * 判断用户名和密码
     * @params
     * */ 
    public async doLogin(params):Promise<Object>{
        let obj={}
        const res = await this.userRepository
        .createQueryBuilder()
        .where("username = :username", { username: params['username'] })
        .getOne();
        if(res){
            const pass = await this.userRepository
            .createQueryBuilder()
            .where("password = :password", { password: params['password'] })
            .getOne();
            if(pass){
                 obj={
                    status:true,
                    id:pass.id 
                }
               
            }
        }

        return obj
    }

  /**
   * 产生token
   * @param user
   */
    public async creatToken(user: JwtPayloadToken): Promise<any>{
        const expiration = 30;
   
        const accessToken = await this.jwtService.sign(user, {
          expiresIn: expiration,
        });
        return {
          expiration,
          accessToken,
        };
    }

    
    /**
     * 核查用户
     * @param token
     */
    async verifyUser(token: string) {
        return await this.jwtService.verify(token);
    }


}
