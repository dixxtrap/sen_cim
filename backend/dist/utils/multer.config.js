"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterConfig = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
exports.MulterConfig = platform_express_1.MulterModule.register({
    preservePath: false,
    dest: 'upload',
    storage: (0, multer_1.diskStorage)({
        destination: 'upload',
    }),
});
//# sourceMappingURL=multer.config.js.map