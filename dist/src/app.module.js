"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const card_module_1 = require("./card/card.module");
const card_entity_1 = require("./card/card.entity");
const cate_module_1 = require("./cate/cate.module");
const cate_entity_1 = require("./cate/cate.entity");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/user.entity");
const role_module_1 = require("./role/role.module");
const role_entity_1 = require("./role/role.entity");
const auth_module_1 = require("./auth/auth.module");
const auth_entity_1 = require("./auth/auth.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
var moment = require('moment');
var path = require('path');
const cate_service_1 = require("./cate/cate.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '123456',
                database: 'cg_back',
                entities: [card_entity_1.Card, cate_entity_1.Cate, user_entity_1.User, role_entity_1.Role, auth_entity_1.Auth],
                synchronize: true,
                logging: true
            }),
            platform_express_1.MulterModule.register({
                storage: multer_1.diskStorage({
                    destination: `./uploads`,
                    filename: (req, file, cb) => {
                        var ttt = moment(new Date()).format('YYYYMMDDHHMMss');
                        var ran = parseInt(Math.random() * 89999 + 10000 + '');
                        var extname = path.extname(file.originalname);
                        var newPath = ttt + ran + extname;
                        return cb(null, newPath);
                    }
                }),
            }),
            card_module_1.CardModule,
            cate_module_1.CateModule,
            user_module_1.UserModule,
            role_module_1.RoleModule,
            auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, cate_service_1.CateService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map