"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeceasedModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const controller_1 = require("./controller");
const service_1 = require("./service");
const multer_config_1 = require("../../utils/multer.config");
const excel_service_1 = require("../../utils/excel.service");
const module_1 = require("../section/module");
const module_2 = require("../row/module");
const module_3 = require("../ownerShipRecord/module");
let DeceasedModule = class DeceasedModule {
};
DeceasedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([typeorm_2.Deceased, typeorm_2.Burial, typeorm_2.Row, typeorm_2.Gravesite]),
            module_1.SectionModule,
            module_2.RowModule,
            module_3.OwnerShipRecordModule,
            multer_config_1.MulterConfig,
        ],
        controllers: [controller_1.DeceasedController],
        providers: [service_1.DeceasedService, excel_service_1.ExcelService],
    })
], DeceasedModule);
exports.DeceasedModule = DeceasedModule;
//# sourceMappingURL=module.js.map