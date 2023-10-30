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
exports.WishService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../../typeorm");
const exception_code_1 = require("../../utils/exception_code");
const typeorm_3 = require("typeorm");
let WishService = class WishService {
    constructor(repos, reposDeceasedWish) {
        this.repos = repos;
        this.reposDeceasedWish = reposDeceasedWish;
    }
    async get(pagination) {
        var _a, _b, _c, _d;
        console.log('----------------------paginaton---------------');
        console.log(pagination);
        const totalItems = await this.repos.count();
        const data = await this.repos.find({
            skip: (_b = ((_a = pagination.page) !== null && _a !== void 0 ? _a : 0 + 1) * pagination.perPage) !== null && _b !== void 0 ? _b : 20,
            take: (_c = pagination.perPage) !== null && _c !== void 0 ? _c : 20,
        });
        return {
            page: (_d = pagination.page) !== null && _d !== void 0 ? _d : 0,
            pageSize: data.length,
            totalItems: totalItems,
            totalPages: Math.round(totalItems / pagination.perPage),
            items: data,
        };
    }
    async getById(id) {
        const wish = await this.repos.findOne({ where: { id } });
        if (!wish)
            new common_1.HttpException(exception_code_1.ExceptionCode.NOT_FOUND, 404);
        return wish;
    }
    async create(body) {
        const wish = await this.repos.save(this.repos.create(body));
        if (!wish)
            new common_1.HttpException(exception_code_1.ExceptionCode.FAILLURE, 400);
        if (body.deceasedId) {
            await this.reposDeceasedWish.save(this.reposDeceasedWish.create({
                deceasedId: body.deceasedId,
                wishesId: wish.id,
            }));
        }
        return exception_code_1.ExceptionCode.SUCCEEDED;
    }
};
WishService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Wishes)),
    __param(1, (0, typeorm_1.InjectRepository)(typeorm_2.DeceasedWishes)),
    __metadata("design:paramtypes", [typeorm_3.Repository,
        typeorm_3.Repository])
], WishService);
exports.WishService = WishService;
//# sourceMappingURL=service.js.map