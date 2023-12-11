"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelService = void 0;
const common_1 = require("@nestjs/common");
const ExcelJS = require("exceljs");
const fs = require("fs");
let ExcelService = class ExcelService {
    async readExcel(filePath) {
        try {
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.readFile(filePath);
            const worksheet = workbook.getWorksheet(1);
            const rows = [];
            const headers = [];
            worksheet.eachRow(async (row, rowNumber) => {
                const rowData = {};
                const r = row.getCell(1);
                row.eachCell((cell, colNumber) => {
                    if (rowNumber == 1) {
                        headers.push(cell.value);
                    }
                    else {
                        rowData[headers[colNumber - 1]] = cell.value;
                    }
                });
                if (rowNumber !== 1)
                    rows.push(rowData);
            });
            await fs.unlink(filePath, () => { });
            return rows;
        }
        catch (error) {
            fs.unlink(filePath, () => { });
            throw error;
        }
    }
};
ExcelService = __decorate([
    (0, common_1.Injectable)()
], ExcelService);
exports.ExcelService = ExcelService;
//# sourceMappingURL=excel.service.js.map