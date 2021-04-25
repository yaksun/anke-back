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
exports.MoneyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const money_entity_1 = require("./money.entity");
let MoneyService = class MoneyService {
    constructor(moneyRepository) {
        this.moneyRepository = moneyRepository;
    }
    async getMoneyListByPage(params) {
        let skip = (params.current - 1) * (params.pageSize);
        return await this.moneyRepository.createQueryBuilder('money')
            .skip(skip)
            .take(params.pageSize)
            .getMany();
    }
    async getMoneyList() {
        return await this.moneyRepository.createQueryBuilder('money')
            .getMany();
    }
    async changeTime(newTime) {
        const res = await this.moneyRepository
            .createQueryBuilder()
            .where("e_time = :time", { time: '9999-12-31 00:00:00' })
            .getOne();
        if (res) {
            res.e_time = newTime;
            await this.moneyRepository.createQueryBuilder().update().set(Object.assign({}, res))
                .where("e_time = :time", { time: '9999-12-31 00:00:00' })
                .execute();
        }
    }
    async addItem(params) {
        return await this.moneyRepository.createQueryBuilder().insert().values(Object.assign({}, params)).execute();
    }
    async updItem(id, params) {
        const temp = {};
        for (let i in params) {
            if (params[i] != undefined && i != 'id') {
                temp[i] = params[i];
            }
        }
        return await this.moneyRepository.createQueryBuilder().update().set(Object.assign({}, temp)).where("id = :id", { id }).execute();
    }
    async delItem(id) {
        return await this.moneyRepository.createQueryBuilder().delete().from(money_entity_1.Money).where("id=:id", { id: id }).execute();
    }
};
MoneyService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(money_entity_1.Money)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MoneyService);
exports.MoneyService = MoneyService;
//# sourceMappingURL=money.service.js.map