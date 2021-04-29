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
exports.CateController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cate_service_1 = require("./cate.service");
const images_entity_1 = require("./images.entity");
let CateController = class CateController {
    constructor(cateService) {
        this.cateService = cateService;
    }
    async getList() {
        try {
            const res = await this.cateService.getCateList();
            let temp = [];
            for (let key in res) {
                temp.push(res[key]);
            }
            return temp;
        }
        catch (error) {
            return {
                code: 400,
                data: [],
                message: 'fail'
            };
        }
    }
    async getItem(idObj) {
        try {
            const res = await this.cateService.findById(idObj);
            return Object.assign({ msg: 'success' }, res);
        }
        catch (error) {
        }
    }
    async addUser(params) {
        try {
            const res = await this.cateService.addCate(Object.assign({}, params));
            if (res) {
                return {
                    msg: 'success',
                    id: res.identifiers[0].id
                };
            }
        }
        catch (error) {
        }
    }
    async updCard(idObj, params) {
        try {
            const res = await this.cateService.updCate(idObj.id, Object.assign({}, params));
            console.log(idObj, '========8888=======');
            if (res) {
                return {
                    msg: 'success'
                };
            }
        }
        catch (error) {
        }
    }
    async delCard(idObj) {
        try {
            const res = await this.cateService.delCate(idObj.id);
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
    swagger_1.ApiOperation({ summary: '分类列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CateController.prototype, "getList", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ summary: '单条查询' }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CateController.prototype, "getItem", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '新增分类' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [images_entity_1.Images]),
    __metadata("design:returntype", Promise)
], CateController.prototype, "addUser", null);
__decorate([
    common_1.Post(':id'),
    swagger_1.ApiOperation({ summary: '修改分类' }),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, images_entity_1.Images]),
    __metadata("design:returntype", Promise)
], CateController.prototype, "updCard", null);
__decorate([
    common_1.Post('/del/:id'),
    swagger_1.ApiOperation({ summary: '删除分类' }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CateController.prototype, "delCard", null);
CateController = __decorate([
    common_1.Controller('cate'),
    swagger_1.ApiTags('分类'),
    __metadata("design:paramtypes", [cate_service_1.CateService])
], CateController);
exports.CateController = CateController;
//# sourceMappingURL=cate.controller.js.map