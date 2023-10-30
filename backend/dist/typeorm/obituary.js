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
exports.Obituary = void 0;
const typeorm_1 = require("typeorm");
const sharedFlower_1 = require("./sharedFlower");
const wishes_1 = require("./wishes");
let Obituary = class Obituary {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Obituary.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Obituary.prototype, "deceasedFirstname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Obituary.prototype, "deceasedLastname", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true, default: null }),
    __metadata("design:type", Date)
], Obituary.prototype, "deceasedDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Obituary.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Obituary.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Obituary.prototype, "cause", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Obituary.prototype, "placeOfDeath", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Obituary.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Obituary.prototype, "fileUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Obituary.prototype, "userDisplayName", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => sharedFlower_1.SharedFlower, {
        cascade: true,
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Obituary.prototype, "flowers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => wishes_1.Wishes, {
        cascade: true,
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Obituary.prototype, "wishes", void 0);
Obituary = __decorate([
    (0, typeorm_1.Entity)()
], Obituary);
exports.Obituary = Obituary;
//# sourceMappingURL=obituary.js.map