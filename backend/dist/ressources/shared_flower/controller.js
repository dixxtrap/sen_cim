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
exports.SharedFlowerController = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
let SharedFlowerController = class SharedFlowerController {
    constructor(service) {
        this.service = service;
    }
    getS() {
        return this.service.getS();
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
], SharedFlowerController.prototype, "getS", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SharedFlowerDto]),
    __metadata("design:returntype", void 0)
], SharedFlowerController.prototype, "create", null);
SharedFlowerController = __decorate([
    (0, common_1.Controller)('shared_flower'),
    (0, swagger_1.ApiTags)('shared_flower'),
    __metadata("design:paramtypes", [service_1.SharedFlowerService])
], SharedFlowerController);
exports.SharedFlowerController = SharedFlowerController;
//# sourceMappingURL=controller.js.map