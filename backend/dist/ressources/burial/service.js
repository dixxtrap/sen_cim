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
exports.BurialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../../typeorm");
const typeorm_3 = require("typeorm");
const exception_code_1 = require("../../utils/exception_code");
let BurialService = class BurialService {
    constructor(repos) {
        this.repos = repos;
    }
    async get() {
        return await this.repos.find({ take: 15 });
    }
    async search(body, pagination) {
        const burials = await this.repos.find({
            where: {
                deceased: {
                    firstName: (0, typeorm_3.Like)(`%${body.firstName}%`),
                    lastName: (0, typeorm_3.Like)(`%${body.lastName}%`),
                    dateOfDeath: (0, typeorm_3.Raw)((alias) => `YEAR(${alias}) = :year`, {
                        year: body.year,
                    }),
                },
            },
            relations: { gravesite: { row: { section: true } }, deceased: true },
            skip: pagination.page * pagination.perPage,
            take: pagination.perPage,
        });
        if (burials.length > 0)
            return burials;
        throw new common_1.HttpException(exception_code_1.ExceptionCode.NOT_FOUND, 404);
    }
    async create(body) {
        return await this.repos.save(this.repos.create(body));
    }
    async getById(id) {
        return await this.repos.findOne({
            where: { id },
            relations: {
                deceased: { flowers: { flower: true }, wishes: true },
                gravesite: { row: { section: { cimetery: true } } },
            },
        });
    }
    async update(id, body) {
        return await this.repos.update(id, Object.assign({}, body));
    }
    async delete(id) {
        return await this.repos.delete(id);
    }
};
BurialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Burial)),
    __metadata("design:paramtypes", [typeorm_3.Repository])
], BurialService);
exports.BurialService = BurialService;
//# sourceMappingURL=service.js.map