"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravesiteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("../typeorm");
const controller_1 = require("./controller");
const service_1 = require("./service");
const typeorm_2 = require("@nestjs/typeorm");
let GravesiteModule = class GravesiteModule {
};
GravesiteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_2.TypeOrmModule.forFeature([typeorm_1.Gravesite])],
        controllers: [controller_1.GravesiteController],
        providers: [service_1.GravesiteService],
    })
], GravesiteModule);
exports.GravesiteModule = GravesiteModule;
//# sourceMappingURL=module.js.map