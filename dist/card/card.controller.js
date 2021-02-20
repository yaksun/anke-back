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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let CardController = class CardController {
    index() {
        return { code: 200, data: [] };
    }
    async create() {
    }
    update() {
    }
    delete() {
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: '卡片列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CardController.prototype, "index", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '添加卡片' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CardController.prototype, "create", null);
__decorate([
    common_1.Post(':id'),
    swagger_1.ApiOperation({ summary: '修改卡片' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CardController.prototype, "update", null);
__decorate([
    common_1.Post('/del/:id'),
    swagger_1.ApiOperation({ summary: '删除卡片' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CardController.prototype, "delete", null);
CardController = __decorate([
    common_1.Controller('card'),
    swagger_1.ApiTags('卡片')
], CardController);
exports.CardController = CardController;
//# sourceMappingURL=card.controller.js.map