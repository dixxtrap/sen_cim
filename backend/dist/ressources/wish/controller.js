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
exports.WishControlller = void 0;
const swagger_1 = require("@nestjs/swagger");
const service_1 = require("./service");
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const pagination_dto_1 = require("../../utils/pagination_dto");
let WishControlller = class WishControlller {
    constructor(service) {
        this.service = service;
    }
    get(query) {
        return this.service.get(query);
    }
    create(body) {
        return this.service.create(body);
    }
    getById(id) {
        return this.service.getById(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], WishControlller.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.WishDto]),
    __metadata("design:returntype", void 0)
], WishControlller.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WishControlller.prototype, "getById", null);
WishControlller = __decorate([
    (0, swagger_1.ApiTags)('Wish'),
    (0, common_1.Controller)('wish'),
    __metadata("design:paramtypes", [service_1.WishService])
], WishControlller);
exports.WishControlller = WishControlller;
//# sourceMappingURL=controller.js.map