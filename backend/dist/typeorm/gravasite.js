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
exports.Gravesite = void 0;
const typeorm_1 = require("typeorm");
const row_1 = require("./row");
const burial_1 = require("./burial");
const ownerShipRecord_1 = require("./ownerShipRecord");
let Gravesite = class Gravesite {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Gravesite.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => row_1.Row, (row) => row.gravesites, {
        onDelete: 'SET NULL',
        onUpdate: "SET NULL",
        nullable: true
    }),
    __metadata("design:type", row_1.Row)
], Gravesite.prototype, "row", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => burial_1.Burial, (burial) => burial.gravesite, {
        cascade: true,
        nullable: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", Array)
], Gravesite.prototype, "burials", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ownerShipRecord_1.OwnerShipRecord, (osr) => osr.gravesite, {
        cascade: true,
        nullable: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", Array)
], Gravesite.prototype, "ownerShipRecords", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Gravesite.prototype, "platNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Gravesite.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Gravesite.prototype, "purchase", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Gravesite.prototype, "rowId", void 0);
Gravesite = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)(['platNumber'], { unique: true })
], Gravesite);
exports.Gravesite = Gravesite;
//# sourceMappingURL=gravasite.js.map