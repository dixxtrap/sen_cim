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
exports.CimeteryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const typeorm_3 = require("typeorm");
const dto_1 = require("./dto");
const fs_1 = require("fs");
const exception_code_1 = require("../../utils/exception_code");
const excel_service_1 = require("../../utils/excel.service");
let CimeteryService = class CimeteryService {
    constructor(repos, excelService) {
        this.repos = repos;
        this.excelService = excelService;
    }
    async get() {
        return await this.repos.find();
    }
    async create(body) {
        return await this.repos.save(body);
    }
    async createBulk({ path, body }) {
        const data = await this.excelService.readExcel(path);
        console.log(data[0]);
        const succesList = [];
        const listCimetiery = data.map((item) => {
            var _a;
            return {
                name: item[body.name].toLowerCase().trim(),
                address: item[body.address],
                city: item[body.city],
                confession: item[body.confession],
                description: item[body.description],
                email: item[body.email],
                country: item[body.country],
                phone: item[body.phone],
                link: (_a = item[body.link]) === null || _a === void 0 ? void 0 : _a.text,
                laltitude: (0, dto_1.getLocalisation)(item[body.localisation]).laltitude,
                longitude: (0, dto_1.getLocalisation)(item[body.localisation]).longitude,
            };
        });
        try {
            await Promise.all(listCimetiery.map(async (item) => {
                await succesList.push(await this.create(item));
            }));
            return exception_code_1.ExceptionCode.SUCCEEDED;
        }
        catch (error) {
            await this.repos.delete({ id: (0, typeorm_3.In)(succesList.map((item) => item.id)) });
            console.log(error);
            throw new common_1.HttpException(Object.assign(Object.assign({}, exception_code_1.ExceptionCode.FAILLURE), { messageLigne: succesList.length }), 500);
        }
    }
    async getById(id) {
        return await this.repos.findOne({ where: { id } });
    }
    async update(id, body) {
        const cim = await this.repos.findOne({ where: { id: (0, typeorm_3.Equal)(id) } });
        if (cim.photo && cim.photo !== '') {
            (0, fs_1.unlink)(cim.photo, () => {
                console.log('file delete');
            });
        }
        return await this.repos.update({ id }, Object.assign({}, body));
    }
    async delete(id) {
        return await this.repos.update({ id }, { isActive: false });
    }
};
CimeteryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Cimetery)),
    __metadata("design:paramtypes", [typeorm_3.Repository,
        excel_service_1.ExcelService])
], CimeteryService);
exports.CimeteryService = CimeteryService;
//# sourceMappingURL=service.js.map