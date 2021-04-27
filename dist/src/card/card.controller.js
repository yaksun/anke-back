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
exports.CardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const card_service_1 = require("./card.service");
const trading_log_entity_1 = require("./trading_log.entity");
let CardController = class CardController {
    constructor(cardService) {
        this.cardService = cardService;
    }
    async getList(params) {
        try {
            const res = await this.cardService.getCardList();
            const res2 = await this.cardService.getCardListByPage(params);
            let temp = [];
            let temp2 = [];
            for (let key in res2) {
                temp.push(res2[key]);
            }
            for (let key in res) {
                temp2.push(res[key]);
            }
            let keyWords = ['trade_type', 'security_class'];
            for (let key in params) {
                if (keyWords.indexOf(key) != -1 && params[key]) {
                    temp = temp.filter(item => item[key].indexOf(params[key]) != -1);
                    temp2 = temp2.filter(item => item[key].indexOf(params[key]) != -1);
                }
            }
            if (params['trade_date_begin']) {
                temp = temp.filter(item => new Date(item['trade_date']).getTime() > params['trade_date_begin']);
                temp2 = temp2.filter(item => new Date(item['trade_date']).getTime() > params['trade_date_begin']);
            }
            if (params['trade_date_end']) {
                temp = temp.filter(item => new Date(item['trade_date']).getTime() < params['trade_date_end']);
                temp2 = temp2.filter(item => new Date(item['trade_date']).getTime() < params['trade_date_end']);
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
            const res = await this.cardService.addCard(Object.assign({}, params));
            if (res) {
                return {
                    code: 200,
                    msg: 'success'
                };
            }
        }
        catch (error) {
            return {
                code: 400,
                msg: '请检查数据格式'
            };
        }
    }
    async updCard(idObj, params) {
        try {
            const res = await this.cardService.updCard(idObj.id, Object.assign({}, params));
            if (res) {
                return {
                    code: 200,
                    msg: 'success'
                };
            }
        }
        catch (error) {
            return {
                code: 400,
                msg: '请检查数据格式'
            };
        }
    }
    async delCard(idObj) {
        try {
            const res = await this.cardService.delCard(idObj.id);
            if (res) {
                return {
                    code: 200,
                    msg: 'success'
                };
            }
        }
        catch (error) {
            return {
                code: 400,
                msg: '请检查数据格式'
            };
        }
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: '卡片列表' }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "getList", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '新增列表' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trading_log_entity_1.TradingLog]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "addUser", null);
__decorate([
    common_1.Post(':id'),
    swagger_1.ApiOperation({ summary: '修改卡片' }),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, trading_log_entity_1.TradingLog]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "updCard", null);
__decorate([
    common_1.Post('/del/:id'),
    swagger_1.ApiOperation({ summary: '删除卡片' }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "delCard", null);
CardController = __decorate([
    common_1.Controller('card'),
    swagger_1.ApiTags('卡片'),
    __metadata("design:paramtypes", [card_service_1.CardService])
], CardController);
exports.CardController = CardController;
//# sourceMappingURL=card.controller.js.map