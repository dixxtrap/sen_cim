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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObituaryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const service_1 = require("./service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const dto_1 = require("./dto");
const mysql_config_1 = require("../../mysql.config");
let ObituaryController = class ObituaryController {
    constructor(service) {
        this.service = service;
    }
    create(body, file) {
        body.fileName = file.filename;
        body.fileUrl = file.path;
        return this.service.create(body);
    }
    async getFile(res, name) {
        console.log(`file--------------------${mysql_config_1.basedire}------------------ ${(0, path_1.join)(mysql_config_1.basedire, '..', 'src', 'upload', name)}`);
        const filePath = (0, path_1.join)(mysql_config_1.basedire, '..', 'src', 'upload', name);
        return res.sendFile(filePath);
    }
    find() {
        return this.service.find();
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        dest: './src/upload',
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                console.log('------------------destination file-------------------');
                console.log(file);
                console.log(file);
                cb(null, './src/upload');
            },
            filename: (req, file, callback) => {
                console.log('------------------destination file name-------------------');
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return callback(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ObituaryDto, Object]),
    __metadata("design:returntype", void 0)
], ObituaryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('file/:name'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ObituaryController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ObituaryController.prototype, "find", null);
ObituaryController = __decorate([
    (0, common_1.Controller)('obituary'),
    (0, swagger_1.ApiTags)('obituary'),
    __metadata("design:paramtypes", [service_1.ObituaryService])
], ObituaryController);
exports.ObituaryController = ObituaryController;
//# sourceMappingURL=controller.js.map