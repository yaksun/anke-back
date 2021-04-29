"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./user.controller");
const user_entity_1 = require("./user.entity");
const config_1 = require("../../config/config");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'marvin',
                signOptions: {
                    expiresIn: config_1.default.tokenSetTimeOut,
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [typeorm_1.TypeOrmModule]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map