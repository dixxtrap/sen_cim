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
exports.ObituaryService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const typeorm_3 = require("typeorm");
let ObituaryService = class ObituaryService {
    constructor(repos) {
        this.repos = repos;
    }
    async create(body) {
        return this.repos.save(this.repos.create(body));
    }
    async find() {
        return this.repos.find({ relations: { flowers: true, wishes: true } });
    }
};
ObituaryService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Obituary)),
    __metadata("design:paramtypes", [typeorm_3.Repository])
], ObituaryService);
exports.ObituaryService = ObituaryService;
//# sourceMappingURL=service.js.map