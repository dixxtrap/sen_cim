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
exports.DeceasedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const typeorm_3 = require("typeorm");
const exception_code_1 = require("../../utils/exception_code");
let DeceasedService = class DeceasedService {
    constructor(repos, burial, section, row, gravesite) {
        this.repos = repos;
        this.burial = burial;
        this.section = section;
        this.row = row;
        this.gravesite = gravesite;
    }
    async get() {
        return await this.repos.find({ take: 15 });
    }
    async search(body, pagination) {
        const deceased = await this.repos.find({
            where: {
                firstName: (0, typeorm_3.Like)(`%${body.firstName}%`),
                dateOfDeath: (0, typeorm_3.Raw)((alias) => `YEAR(${alias}) = :year`, {
                    year: body.year,
                }),
            },
            skip: pagination.page * pagination.perPage,
        });
        if (deceased.length > 0)
            return deceased;
        throw new common_1.HttpException(exception_code_1.ExceptionCode.NOT_FOUND, 404);
    }
    async getById(id) {
        return await this.repos.findOne({ where: { id } });
    }
    async create(body) {
        var _a;
        const section = await this.section.findOne({
            where: { name: body.sectionName },
        });
        if (!section)
            throw new common_1.HttpException({
                code: 404,
                status: 'NOT_FOUND',
                message: `Section with name ${body.sectionName} not found`,
            }, 404);
        console.log('-----------------section created successful------------------');
        const row = (_a = (await this.row.findOne({
            where: { sectionId: section.id, numero: body.rowName },
        }))) !== null && _a !== void 0 ? _a : (await this.row.save(this.row.create({ sectionId: section.id, numero: body.rowName })));
        console.log('-----------------row created successful------------------');
        const deceased = await this.repos.save(this.repos.create(body));
        console.log('-----------------Deceased created successful------------------');
        const gravasite = await this.gravesite.save(this.gravesite.create({ rowId: row.id, platNumber: body.platNumber }));
        console.log('-----------------gravesite created successful------------------');
        const burial = await this.burial.save(this.burial.create({
            burialPermitNumber: body.burialPermitNumber,
            gravesiteId: gravasite.id,
            deceasedId: deceased.id,
            burialDate: body.burialDate,
        }));
        return burial;
    }
    async update(id, body) {
        return await this.repos.update(id, Object.assign({}, body));
    }
    async delete(id) {
        return await this.repos.delete(id);
    }
};
DeceasedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Deceased)),
    __param(1, (0, typeorm_1.InjectRepository)(typeorm_2.Burial)),
    __param(2, (0, typeorm_1.InjectRepository)(typeorm_2.Section)),
    __param(3, (0, typeorm_1.InjectRepository)(typeorm_2.Row)),
    __param(4, (0, typeorm_1.InjectRepository)(typeorm_2.Gravesite)),
    __metadata("design:paramtypes", [typeorm_3.Repository,
        typeorm_3.Repository,
        typeorm_3.Repository,
        typeorm_3.Repository,
        typeorm_3.Repository])
], DeceasedService);
exports.DeceasedService = DeceasedService;
//# sourceMappingURL=service.js.map