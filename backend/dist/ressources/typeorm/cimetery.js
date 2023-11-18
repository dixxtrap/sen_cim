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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cimetery = void 0;
const typeorm_1 = require("typeorm");
const section_1 = require("./section");
let Cimetery = class Cimetery {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cimetery.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => section_1.Section, (section) => section.cimetery, {
        cascade: true,
        nullable: true,
        onDelete: 'SET NULL',
    }),
    __metadata("design:type", Array)
], Cimetery.prototype, "sections", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Cimetery.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 30, nullable: true }),
    __metadata("design:type", String)
], Cimetery.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], Cimetery.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], Cimetery.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, default: 'Dakar' }),
    __metadata("design:type", String)
], Cimetery.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, default: 'Senegal' }),
    __metadata("design:type", String)
], Cimetery.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20, nullable: true }),
    __metadata("design:type", String)
], Cimetery.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20, nullable: true }),
    __metadata("design:type", String)
], Cimetery.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)('double', { default: 0, nullable: true }),
    __metadata("design:type", Number)
], Cimetery.prototype, "laltitude", void 0);
__decorate([
    (0, typeorm_1.Column)('double', { default: 0, nullable: true }),
    __metadata("design:type", Number)
], Cimetery.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)('bool', { default: true, nullable: true }),
    __metadata("design:type", Boolean)
], Cimetery.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Cimetery.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Cimetery.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cimetery.prototype, "photo", void 0);
Cimetery = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)(['name'], { unique: true }),
    (0, typeorm_1.Index)(['name', 'country'], { unique: true })
], Cimetery);
exports.Cimetery = Cimetery;
//# sourceMappingURL=cimetery.js.map