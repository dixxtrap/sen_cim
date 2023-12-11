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
const excel_service_1 = require("../../utils/excel.service");
const service_1 = require("../section/service");
const service_2 = require("../row/service");
const service_3 = require("../ownerShipRecord/service");
const makeDate = ({ day, month, year, }) => {
    if (!year)
        return null;
    const date = new Date(0);
    if (year)
        date.setFullYear(year);
    date.setMonth(month === 0 || !day ? 1 : month);
    date.setDate(day === 0 || !day ? 1 : day);
    return date;
};
const test = (val) => {
    if (val === '-')
        return null;
    return val;
};
const tranformBirthDay = (str) => {
    if (!str)
        return null;
    const [day, month, year] = str.toString().split('/');
    if (!test(year))
        return null;
    const date = new Date();
    date.setFullYear(parseInt(year));
    date.setDate(!parseInt(day) || parseInt(day) === 0 ? 1 : parseInt(day));
    date.setMonth(!parseInt(month) || parseInt(month) === 0 ? 1 : parseInt(month));
    return date;
};
let DeceasedService = class DeceasedService {
    constructor(repos, burial, section, row, owner, gravesite, excelService) {
        this.repos = repos;
        this.burial = burial;
        this.section = section;
        this.row = row;
        this.owner = owner;
        this.gravesite = gravesite;
        this.excelService = excelService;
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
    async create2(body) {
        const section = await this.section.create({
            cimeteryId: body.cimeteryId,
            name: `${body.sectionName}`,
        });
        const row = await this.row.create({
            numero: `${body.rowName}`,
            sectionId: section.id,
        });
        const deceased = await this.repos.save(this.repos.create(body));
        const gravasite = await this.gravesite.save(this.gravesite.create({ rowId: row.id, platNumber: body.platNumber }));
        const burial = await this.burial.save(this.burial.create({
            burialPermitNumber: body.burialPermitNumber,
            gravesiteId: gravasite.id,
            deceasedId: deceased.id,
            burialDate: body.burialDate,
        }));
        if (body.ownShipPhone || body.ownShipName) {
            await this.owner.create({
                gravesiteId: gravasite.id,
                ownerShipName: body.ownShipName,
                ownerShipAddress: body.ownShipAddress,
                ownerShipPhone: body.ownShipPhone,
            });
        }
        return burial;
    }
    async bulk({ path, body }) {
        const successList = [];
        const data = await this.excelService.readExcel(path);
        console.log(data);
        const deceasedList = data.map((item) => {
            return {
                burialPermitNumber: item[body.burialPermitNumber],
                dateOfBirth: tranformBirthDay(test(item[body.dateOfBirthStr])),
                firstName: item[body.firstName],
                lastName: item[body.lastName],
                placeOfBirth: item[body.placeOfBirth],
                placeOfDeath: item[body.placeOfDeath],
                gender: item[body.gender],
                photo: null,
                sectionName: item[body.sectionName],
                rowName: item[body.rowName],
                cimeteryId: body.cimeteryId,
                platNumber: item[body.platNumber],
                ownShipAddress: `${item[body.ownShipAddress]}`,
                ownShipName: `${item[body.ownShipName]}`,
                ownShipPhone: `${item[body.ownShipPhone]}`,
                dateOfDeath: makeDate({
                    day: test(item[body.dateOfDeathDay]),
                    month: test(item[body.dateOfDeathMonth]),
                    year: test(item[body.dateOfDeathYear]),
                }),
                burialDate: makeDate({
                    day: test(item[body.burialDateDay]),
                    month: test(item[body.burialDateMonth]),
                    year: test(item[body.burialDateYear]),
                }),
            };
        });
        try {
            await Promise.all(deceasedList.map(async (item) => {
                const b = await this.create2(item);
                successList.push(b);
                return b;
            }));
        }
        catch (error) {
            console.log(error);
        }
        return exception_code_1.ExceptionCode.SUCCEEDED;
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
    __param(5, (0, typeorm_1.InjectRepository)(typeorm_2.Gravesite)),
    __metadata("design:paramtypes", [typeorm_3.Repository,
        typeorm_3.Repository,
        service_1.SectionService,
        service_2.RowServive,
        service_3.OwnerShipRecordService,
        typeorm_3.Repository,
        excel_service_1.ExcelService])
], DeceasedService);
exports.DeceasedService = DeceasedService;
//# sourceMappingURL=service.js.map