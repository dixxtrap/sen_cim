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
exports.DeceasedController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const service_1 = require("./service");
const dto_1 = require("./dto");
const pagination_dto_1 = require("../../utils/pagination_dto");
const platform_express_1 = require("@nestjs/platform-express");
let DeceasedController = class DeceasedController {
    constructor(service) {
        this.service = service;
    }
    get() {
        return this.service.get();
    }
    getById(id) {
        return this.service.getById(id);
    }
    bulk(body, file) {
        return this.service.bulk({ path: file.path, body: body });
    }
    create(body) {
        return this.service.create2(body);
    }
    search(param, body) {
        return this.service.search(body, param);
    }
    update(id, body) {
        return this.service.update(id, body);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeceasedController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeceasedController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('bulk'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DeceasedDto, Object]),
    __metadata("design:returntype", void 0)
], DeceasedController.prototype, "bulk", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DeceasedDto]),
    __metadata("design:returntype", void 0)
], DeceasedController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('search'),
    __param(0, (0, common_1.Query)('')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, dto_1.SearchDeceasedDto]),
    __metadata("design:returntype", void 0)
], DeceasedController.prototype, "search", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.DeceasedDto]),
    __metadata("design:returntype", void 0)
], DeceasedController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeceasedController.prototype, "delete", null);
DeceasedController = __decorate([
    (0, common_1.Controller)('deceased'),
    (0, swagger_1.ApiTags)('Deceased'),
    __metadata("design:paramtypes", [service_1.DeceasedService])
], DeceasedController);
exports.DeceasedController = DeceasedController;
//# sourceMappingURL=controller.js.map