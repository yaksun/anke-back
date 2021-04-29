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
exports.TradingLog = void 0;
const typeorm_1 = require("typeorm");
let TradingLog = class TradingLog {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TradingLog.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], TradingLog.prototype, "trade_date", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], TradingLog.prototype, "trade_no", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], TradingLog.prototype, "trade_type", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], TradingLog.prototype, "security_code", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], TradingLog.prototype, "security_name", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "security_num", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], TradingLog.prototype, "security_class", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "proxy_price", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "real_price", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "sl_price", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "tl_price", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "commission", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "profit", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], TradingLog.prototype, "reason", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "verify", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "floating_loss", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "floating_profit", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], TradingLog.prototype, "remark", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "img_id", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10 }),
    __metadata("design:type", Number)
], TradingLog.prototype, "user_id", void 0);
TradingLog = __decorate([
    typeorm_1.Entity()
], TradingLog);
exports.TradingLog = TradingLog;
//# sourceMappingURL=trading_log.entity.js.map