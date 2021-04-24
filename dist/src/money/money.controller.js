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
exports.MoneyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const money_service_1 = require("./money.service");
const money_entity_1 = require("./money.entity");
let MoneyController = class MoneyController {
    constructor(moneyService) {
        this.moneyService = moneyService;
    }
    async getList(params) {
        try {
            const res = await this.moneyService.getMoneyList();
            const res2 = await this.moneyService.getMoneyListByPage(params);
            let temp = [];
            let temp2 = [];
            for (let key in res2) {
                temp.push(res2[key]);
            }
            for (let key in res) {
                temp2.push(res[key]);
            }
            return {
                code: 200,
                data: temp,
                current: 1,
                pageSize: params.pageSize * 1,
                total: temp2.length
            };
        }
        catch (error) {
            return {
                code: 400,
                data: [],
                message: 'fail'
            };
        }
    }
    async addUser(params) {
        try {
            const res = await this.moneyService.addItem(Object.assign({}, params));
            if (res) {
                return {
                    code: 200,
                    msg: 'success'
                };
            }
        }
        catch (error) {
        }
    }
    async updCard(idObj, params) {
        try {
            const res = await this.moneyService.updItem(idObj.id, Object.assign({}, params));
            if (res) {
                return {
                    code: 200,
                    msg: 'success'
                };
            }
        }
        catch (error) {
        }
    }
    async delCard(idObj) {
        try {
            const res = await this.moneyService.delItem(idObj.id);
            if (res) {
                return {
                    code: 200,
                    msg: 'success'
                };
            }
        }
        catch (error) {
        }
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: '流水账列表' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MoneyController.prototype, "getList", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '新增' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [money_entity_1.Money]),
    __metadata("design:returntype", Promise)
], MoneyController.prototype, "addUser", null);
__decorate([
    common_1.Post(':id'),
    swagger_1.ApiOperation({ summary: '修改' }),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, money_entity_1.Money]),
    __metadata("design:returntype", Promise)
], MoneyController.prototype, "updCard", null);
__decorate([
    common_1.Post('/del/:id'),
    swagger_1.ApiOperation({ summary: '删除' }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MoneyController.prototype, "delCard", null);
MoneyController = __decorate([
    common_1.Controller('money'),
    swagger_1.ApiTags('流水账'),
    __metadata("design:paramtypes", [money_service_1.MoneyService])
], MoneyController);
exports.MoneyController = MoneyController;
//# sourceMappingURL=money.controller.js.map