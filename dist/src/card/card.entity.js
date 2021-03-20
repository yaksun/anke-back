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
exports.Card = void 0;
const typeorm_1 = require("typeorm");
const cate_entity_1 = require("../cate/cate.entity");
let Card = class Card {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Card.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "trade_date", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "trade_no", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "trade_type", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "security_code", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "security_name", void 0);
__decorate([
    typeorm_1.Column('double', { default: 0 }),
    __metadata("design:type", Number)
], Card.prototype, "proxy_price", void 0);
__decorate([
    typeorm_1.Column('double', { default: 0 }),
    __metadata("design:type", Number)
], Card.prototype, "real_price", void 0);
__decorate([
    typeorm_1.Column('double', { default: 0 }),
    __metadata("design:type", Number)
], Card.prototype, "sl_price", void 0);
__decorate([
    typeorm_1.Column('double', { default: 0 }),
    __metadata("design:type", Number)
], Card.prototype, "tl_price", void 0);
__decorate([
    typeorm_1.Column('double', { default: 0 }),
    __metadata("design:type", Number)
], Card.prototype, "commission", void 0);
__decorate([
    typeorm_1.Column('double', { default: 0 }),
    __metadata("design:type", Number)
], Card.prototype, "profit", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "reason", void 0);
__decorate([
    typeorm_1.Column('double', { default: 0 }),
    __metadata("design:type", Number)
], Card.prototype, "verify", void 0);
__decorate([
    typeorm_1.Column('double', { default: 0 }),
    __metadata("design:type", Number)
], Card.prototype, "floating_loss", void 0);
__decorate([
    typeorm_1.Column('double', { default: 0 }),
    __metadata("design:type", Number)
], Card.prototype, "floating_profit", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Card.prototype, "remark", void 0);
__decorate([
    typeorm_1.OneToOne(type => cate_entity_1.Cate),
    typeorm_1.JoinColumn(),
    __metadata("design:type", cate_entity_1.Cate)
], Card.prototype, "cate", void 0);
Card = __decorate([
    typeorm_1.Entity()
], Card);
exports.Card = Card;
//# sourceMappingURL=card.entity.js.map