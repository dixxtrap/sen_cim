"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerShipRecordModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../../typeorm");
const controller_1 = require("./controller");
const service_1 = require("./service");
let OwnerShipRecordModule = class OwnerShipRecordModule {
};
OwnerShipRecordModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([typeorm_2.OwnerShipRecord])],
        controllers: [controller_1.OwnerShipRecordController],
        providers: [service_1.OwnerShipRecordService],
    })
], OwnerShipRecordModule);
exports.OwnerShipRecordModule = OwnerShipRecordModule;
//# sourceMappingURL=module.js.map