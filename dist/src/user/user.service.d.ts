import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtPayloadToken } from './interfface';
export declare class UserService {
    private userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    doLogin(params: any): Promise<Boolean>;
    creatToken(user: JwtPayloadToken): Promise<any>;
    verifyUser(token: string): Promise<any>;
}
