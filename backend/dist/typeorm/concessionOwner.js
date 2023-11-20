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
exports.ConcessionOwner = void 0;
const typeorm_1 = require("typeorm");
const ownerShipRecord_1 = require("./ownerShipRecord");
let ConcessionOwner = class ConcessionOwner {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ConcessionOwner.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ownerShipRecord_1.OwnerShipRecord, (osr) => osr.concessionOwner, {
        cascade: true,
        nullable: true,
        onDelete: 'SET NULL',
    }),
    __metadata("design:type", Array)
], ConcessionOwner.prototype, "ownerShipRecords", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConcessionOwner.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConcessionOwner.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConcessionOwner.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ConcessionOwner.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ConcessionOwner.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ConcessionOwner.prototype, "updatedAt", void 0);
ConcessionOwner = __decorate([
    (0, typeorm_1.Entity)()
], ConcessionOwner);
exports.ConcessionOwner = ConcessionOwner;
//# sourceMappingURL=concessionOwner.js.map