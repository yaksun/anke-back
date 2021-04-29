"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyModule = void 0;
const common_1 = require("@nestjs/common");
const money_service_1 = require("./money.service");
const typeorm_1 = require("@nestjs/typeorm");
const money_controller_1 = require("./money.controller");
const asset_entity_1 = require("./asset.entity");
let MoneyModule = class MoneyModule {
};
MoneyModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([asset_entity_1.Asset])
        ],
        controllers: [money_controller_1.MoneyController],
        providers: [money_service_1.MoneyService],
        exports: [typeorm_1.TypeOrmModule]
    })
], MoneyModule);
exports.MoneyModule = MoneyModule;
//# sourceMappingURL=money.module.js.map