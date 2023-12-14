"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.basedire = void 0;
const typeorm_1 = require("./ressources/typeorm");
exports.basedire = __dirname;
exports.config = {
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'root',
    dateStrings: true,
    entities: typeorm_1.entities,
    database: 'sen_cim',
    synchronize: true,
};
exports.default = exports.config;
//# sourceMappingURL=mysql.config.js.map