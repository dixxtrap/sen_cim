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
exports.SectionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const typeorm_3 = require("typeorm");
const excel_service_1 = require("../../utils/excel.service");
const exception_code_1 = require("../../utils/exception_code");
let SectionService = class SectionService {
    constructor(repos, excelService) {
        this.repos = repos;
        this.excelService = excelService;
    }
    async bulk({ path, body }) {
        const successList = [];
        const data = await this.excelService.readExcel(path);
        console.log(data);
        const listSection = data.map((item) => {
            return {
                cimeteryId: body.cimeteryId,
                name: `${item[body.name]}`,
                link: item[body.link].text,
                comment: item[body.comment],
            };
        });
        console.log(`-----------------lenght:${listSection.length}-----------`);
        try {
            await Promise.all(listSection.map(async (item) => {
                successList.push(await this.create(item));
            }));
            return exception_code_1.ExceptionCode.SUCCEEDED;
        }
        catch (error) {
            console.log(error);
            await this.repos.delete({ id: (0, typeorm_3.In)(successList.map((item) => item.id)) });
            throw new common_1.HttpException(Object.assign(Object.assign({}, exception_code_1.ExceptionCode.FAILLURE), { ligne: successList.length }), 500);
        }
    }
    async get() {
        return await this.repos.find();
    }
    async create(body) {
        console.log(body);
        const section = await this.repos.findOne({
            where: {
                cimeteryId: (0, typeorm_3.Equal)(body.cimeteryId),
                name: (0, typeorm_3.Like)(`${body.name === '' || body.name === null || body.name === '--'
                    ? '-'
                    : body.name}`
                    .trim()
                    .toLowerCase()),
            },
        });
        console.log(section);
        if (section)
            return section;
        return this.repos.save(this.repos.create(Object.assign({}, body)));
    }
    async getById(id) {
        return await this.repos.findOne({
            where: { id },
            relations: { cimetery: true },
        });
    }
    async update(id, body) {
        return await this.repos.update(id, Object.assign({}, body));
    }
    async delete(id) {
        return await this.repos.delete({ id });
    }
};
SectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Section)),
    __metadata("design:paramtypes", [typeorm_3.Repository,
        excel_service_1.ExcelService])
], SectionService);
exports.SectionService = SectionService;
//# sourceMappingURL=service.js.map