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
exports.OwnerShipRecord = void 0;
const typeorm_1 = require("typeorm");
const gravasite_1 = require("./gravasite");
let OwnerShipRecord = class OwnerShipRecord {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OwnerShipRecord.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gravasite_1.Gravesite, (gravesite) => gravesite.ownerShipRecord, {
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
        nullable: true,
    }),
    __metadata("design:type", Array)
], OwnerShipRecord.prototype, "gravesite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", Date)
], OwnerShipRecord.prototype, "ownerShipStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], OwnerShipRecord.prototype, "gravesiteId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", String)
], OwnerShipRecord.prototype, "ownerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", String)
], OwnerShipRecord.prototype, "ownerAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", String)
], OwnerShipRecord.prototype, "ownerPhone", void 0);
OwnerShipRecord = __decorate([
    (0, typeorm_1.Entity)()
], OwnerShipRecord);
exports.OwnerShipRecord = OwnerShipRecord;
//# sourceMappingURL=ownerShipRecord.js.map