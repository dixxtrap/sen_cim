"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const module_1 = require("./ressources/cimetery/module");
const mysql_config_1 = require("./mysql.config");
const module_2 = require("./ressources/section/module");
const module_3 = require("./ressources/row/module");
const module_4 = require("./ressources/gravesite/module");
const module_5 = require("./ressources/burial/module");
const module_6 = require("./ressources/deceased/module");
const module_7 = require("./ressources/ownerShipRecord/module");
const module_8 = require("./ressources/concessionOwner/module");
const module_9 = require("./ressources/flower/module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(mysql_config_1.default),
            module_1.CimeteryModule,
            module_2.SectionModule,
            module_3.RowModule,
            module_4.GravesiteModule,
            module_5.BurialModule,
            module_6.DeceasedModule,
            module_7.OwnerShipRecordModule,
            module_8.ConcessionOwnerModule,
            module_9.FlowerModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map