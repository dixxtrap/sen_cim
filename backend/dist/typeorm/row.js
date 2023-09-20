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
exports.Row = void 0;
const typeorm_1 = require("typeorm");
const section_1 = require("./section");
const gravesite_1 = require("./gravesite");
let Row = class Row {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Row.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_1.Section, (section) => section.rows, {
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
        nullable: true,
    }),
    __metadata("design:type", section_1.Section)
], Row.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gravesite_1.Gravesite, (gravesite) => gravesite.row, {
        cascade: true,
        nullable: true,
        onDelete: 'SET NULL'
    }),
    __metadata("design:type", Array)
], Row.prototype, "gravesites", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Row.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Row.prototype, "emplacement", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Row.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Row.prototype, "sectionId", void 0);
Row = __decorate([
    (0, typeorm_1.Entity)()
], Row);
exports.Row = Row;
//# sourceMappingURL=row.js.map