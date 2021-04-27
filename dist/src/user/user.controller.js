"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./user.entity");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async login(params, session) {
        try {
            const res = await this.userService.doLogin(Object.assign({}, params));
            if (session && session.username && session.username === params.username) {
                return { code: 200, message: '你已经登陆' };
            }
            if (res) {
                const resToken = await this.userService.creatToken({ name: params.username });
                session[params['username'] + '_token'] = resToken.accessToken;
                console.log(session);
                return { code: 200, message: '登录成功', data: resToken, success: true };
            }
            return { code: 200, message: '用户名或者密码错误', success: false };
        }
        catch (error) {
        }
    }
};
__decorate([
    common_1.Post('/login'),
    swagger_1.ApiOperation({ summary: '用户登录' }),
    __param(0, common_1.Body()), __param(1, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
UserController = __decorate([
    common_1.Controller('user'),
    swagger_1.ApiTags('用户'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map