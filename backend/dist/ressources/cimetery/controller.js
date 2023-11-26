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
exports.CimeteryController = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const platform_express_1 = require("@nestjs/platform-express");
let CimeteryController = class CimeteryController {
    constructor(service) {
        this.service = service;
    }
    get() {
        return this.service.get();
    }
    getById(id) {
        return this.service.getById(id);
    }
    createBulk(body, file) {
        console.log(body);
        return this.service.createBulk({ path: file.path, body });
    }
    addPhoto(id, file, body) {
        return this.service.update(id, Object.assign(Object.assign({}, body), { photo: file.path, photoName: file.filename }));
    }
    update(id, body) {
        return this.service.update(id, body);
    }
    delete(id) {
        return this.service.delete(id);
    }
    create(body) {
        return this.service.create(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CimeteryController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CimeteryController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('bulk'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CimeteryController.prototype, "createBulk", null);
__decorate([
    (0, common_1.Put)('add_photo/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, dto_1.CimeteryDto]),
    __metadata("design:returntype", void 0)
], CimeteryController.prototype, "addPhoto", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.CimeteryDto]),
    __metadata("design:returntype", void 0)
], CimeteryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CimeteryController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CimeteryDto]),
    __metadata("design:returntype", void 0)
], CimeteryController.prototype, "create", null);
CimeteryController = __decorate([
    (0, common_1.Controller)('cimetery'),
    (0, swagger_1.ApiTags)('Cimetery'),
    __metadata("design:paramtypes", [service_1.CimeteryService])
], CimeteryController);
exports.CimeteryController = CimeteryController;
//# sourceMappingURL=controller.js.map