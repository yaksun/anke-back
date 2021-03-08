import { Controller, Get, Post,Body,Session  } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {UserService} from './user.service'
import { User } from './user.entity';

@Controller('user')
@ApiTags('用户')
export class UserController {
    constructor(
        private readonly userService: UserService
        ) {}

    @Post('/login')
    @ApiOperation({summary:'用户登录'})
    public async login(@Body() params:User,  @Session() session):Promise<any>{
        try {
            const res = await this.userService.doLogin({
                ...params
            })

            if (session && session.username && session.username === params.username) {
                // const newToken = await client.get(res.id);
                return { code: 200, message: '你已经登陆' };
              }

        
            // let key = 'token_'+params['username']+parseInt(""+Math.random()*8999+1000)
            // let val = parseInt(""+Math.random()*8999999999+1000000000) +new Date().getTime()
      
            if (res) {
                // session.username = params.username;
                const resToken = await this.userService.creatToken({ name: params.username });
                // const userToken = await client.get(res.id);
                // if (userToken) {
                //   client.del(res.id);
                // }
                // client.set(res.id, resToken.accessToken);
                // client.expire(res.id, config.tokenSetTimeOut);
                session[params['username']+'_token'] = resToken.accessToken
                console.log(session)
                return { code: 200, message: '登录成功', data: resToken, success: true };
              }
              return { code: 200, message: '用户名或者密码错误', success: false };

        //    if(res){
        //         return {
        //             status:res,
        //             [key]:val 
        //         }
        //    }else{
        //        return {
        //            status:res
        //        }
        //    }

        } catch (error) {
            
        }
    }

}
