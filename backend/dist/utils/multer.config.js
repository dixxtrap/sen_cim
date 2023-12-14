"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileInterceptor = exports.MulterConfig = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
exports.MulterConfig = platform_express_1.MulterModule.register({
    preservePath: false,
    dest: 'upload',
    storage: (0, multer_1.diskStorage)({
        destination: 'upload',
    }),
});
exports.fileInterceptor = (0, platform_express_1.FileInterceptor)('file', {
    dest: 'upload',
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            console.log('------------------destination file-------------------');
            console.log(file);
            console.log(file);
            cb(null, 'upload');
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
});
//# sourceMappingURL=multer.config.js.map