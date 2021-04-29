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
exports.CateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const images_entity_1 = require("./images.entity");
let CateService = class CateService {
    constructor(cateRepository) {
        this.cateRepository = cateRepository;
    }
    async findById(params) {
        return await this.cateRepository.createQueryBuilder('cate')
            .where("cate.id = :id", { id: params.id })
            .getOne();
    }
    async getCateList() {
        return await this.cateRepository.createQueryBuilder().getMany();
    }
    async addCate(params) {
        return await this.cateRepository.createQueryBuilder().insert().values(Object.assign({}, params)).execute();
    }
    async updCate(id, params) {
        const temp = {};
        for (const i in params) {
            if (params[i] != undefined) {
                temp[i] = params[i];
            }
        }
        return await this.cateRepository.createQueryBuilder().update().set(Object.assign({}, temp)).where("id = :id", { id }).execute();
    }
    async delCate(id) {
        return await this.cateRepository.createQueryBuilder().delete().from(images_entity_1.Images).where("id=:id", { id: id }).execute();
    }
};
CateService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(images_entity_1.Images)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CateService);
exports.CateService = CateService;
//# sourceMappingURL=cate.service.js.map