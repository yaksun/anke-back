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
const card_entity_1 = require("./card.entity");
let CardController = class CardController {
    constructor(cardService) {
        this.cardService = cardService;
    }
    async getList(params) {
        console.log(params, '=============');
        try {
            const res = await this.cardService.getCardList();
            const res2 = await this.cardService.getCardListByPage(params);
            console.log(res2, '=============');
            let temp = [];
            for (let key in res2) {
                temp.push(res2[key]);
            }
            return {
                data: temp,
                current: 1,
                pageSize: params.pageSize * 1,
                total: res.length
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
            console.log(res);
            if (res) {
                return [];
            }
        }
        catch (error) {
        }
    }
    async updCard(idObj, params) {
        try {
            const res = await this.cardService.updCard(idObj.id, Object.assign({}, params));
            console.log(idObj, '===============');
            if (res) {
                return [];
            }
        }
        catch (error) {
        }
    }
    async delCard(idObj) {
        try {
            const res = await this.cardService.delCard(idObj.id);
            console.log(res, 66666);
            if (res) {
                return [];
            }
        }
        catch (error) {
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
    __metadata("design:paramtypes", [card_entity_1.Card]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "addUser", null);
__decorate([
    common_1.Post(':id'),
    swagger_1.ApiOperation({ summary: '修改卡片' }),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, card_entity_1.Card]),
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