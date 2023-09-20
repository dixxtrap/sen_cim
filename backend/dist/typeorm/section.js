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
exports.Section = void 0;
const typeorm_1 = require("typeorm");
const cimetery_1 = require("./cimetery");
const row_1 = require("./row");
let Section = class Section {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Section.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cimetery_1.Cimetery, (cimetery) => cimetery.sections, {
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
        nullable: true,
    }),
    __metadata("design:type", cimetery_1.Cimetery)
], Section.prototype, "cimetery", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => row_1.Row, (row) => row.section, {
        cascade: true,
        nullable: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", Array)
], Section.prototype, "rows", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Section.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Section.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Section.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Section.prototype, "laltitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Section.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Section.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Section.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Section.prototype, "cimeteryId", void 0);
Section = __decorate([
    (0, typeorm_1.Entity)()
], Section);
exports.Section = Section;
//# sourceMappingURL=section.js.map