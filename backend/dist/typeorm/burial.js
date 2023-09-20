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
exports.Burial = void 0;
const typeorm_1 = require("typeorm");
const gravasite_1 = require("./gravasite");
const deceased_1 = require("./deceased");
let Burial = class Burial {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Burial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gravasite_1.Gravesite, (gravesite) => gravesite.burials, {
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
        nullable: true
    }),
    __metadata("design:type", gravasite_1.Gravesite)
], Burial.prototype, "gravesite", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => deceased_1.Deceased, (deceased) => deceased.burials, {
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
        nullable: true
    }),
    __metadata("design:type", deceased_1.Deceased)
], Burial.prototype, "deceased", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Burial.prototype, "burialDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Burial.prototype, "funeralType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Burial.prototype, "issuingMunicipality", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Burial.prototype, "burialPermitNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Burial.prototype, "issueIn", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Burial.prototype, "dateOfIssuanceOfThePermit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Burial.prototype, "receiptNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Burial.prototype, "amountPaid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Burial.prototype, "allocatedTombVaultArea", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Burial.prototype, "gravesiteId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Burial.prototype, "deceasedId", void 0);
Burial = __decorate([
    (0, typeorm_1.Entity)()
], Burial);
exports.Burial = Burial;
//# sourceMappingURL=burial.js.map