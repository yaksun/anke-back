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
exports.Money = void 0;
const typeorm_1 = require("typeorm");
let Money = class Money {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Money.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('decimal', { default: 0 }),
    __metadata("design:type", Number)
], Money.prototype, "cash", void 0);
__decorate([
    typeorm_1.Column('decimal', { default: 0 }),
    __metadata("design:type", Number)
], Money.prototype, "money_manage", void 0);
__decorate([
    typeorm_1.Column('decimal', { default: 0 }),
    __metadata("design:type", Number)
], Money.prototype, "fund", void 0);
__decorate([
    typeorm_1.Column('decimal', { default: 0 }),
    __metadata("design:type", Number)
], Money.prototype, "stock", void 0);
__decorate([
    typeorm_1.Column('decimal', { default: 0 }),
    __metadata("design:type", Number)
], Money.prototype, "xauusd", void 0);
__decorate([
    typeorm_1.Column('decimal', { default: 0 }),
    __metadata("design:type", Number)
], Money.prototype, "others", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Money.prototype, "s_time", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Money.prototype, "e_time", void 0);
Money = __decorate([
    typeorm_1.Entity()
], Money);
exports.Money = Money;
//# sourceMappingURL=money.entity.js.map