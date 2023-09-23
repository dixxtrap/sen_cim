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
exports.Deceased = void 0;
const typeorm_1 = require("typeorm");
const burial_1 = require("./burial");
let Deceased = class Deceased {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Deceased.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => burial_1.Burial, (burial) => burial.deceased, {
        cascade: true,
        nullable: true,
        onDelete: 'SET NULL',
    }),
    __metadata("design:type", burial_1.Burial)
], Deceased.prototype, "burial", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Deceased.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Deceased.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Deceased.prototype, "placeOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Deceased.prototype, "placeOfDeath", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Deceased.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Deceased.prototype, "dateOfDeath", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Deceased.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Deceased.prototype, "photo", void 0);
Deceased = __decorate([
    (0, typeorm_1.Entity)()
], Deceased);
exports.Deceased = Deceased;
//# sourceMappingURL=deceased.js.map