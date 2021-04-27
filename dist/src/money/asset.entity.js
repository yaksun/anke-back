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
exports.Asset = void 0;
const typeorm_1 = require("typeorm");
let Asset = class Asset {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Asset.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Asset.prototype, "cash", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Asset.prototype, "money_manage", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Asset.prototype, "fund", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Asset.prototype, "stock", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Asset.prototype, "xauusd", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Asset.prototype, "debenture", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Asset.prototype, "others", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Asset.prototype, "total", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Asset.prototype, "remark", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Asset.prototype, "s_time", void 0);
__decorate([
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], Asset.prototype, "e_time", void 0);
Asset = __decorate([
    typeorm_1.Entity()
], Asset);
exports.Asset = Asset;
//# sourceMappingURL=asset.entity.js.map