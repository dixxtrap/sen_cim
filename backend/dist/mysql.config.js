"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basedire = void 0;
<<<<<<< HEAD
const typeorm_1 = require("./typeorm");
=======
const typeorm_1 = require("./ressources/typeorm");
>>>>>>> 0d9866966a600c5344c773bd2a3981c981c7739a
exports.basedire = __dirname;
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    dateStrings: true,
    entities: typeorm_1.entities,
    database: 'sen_cim',
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=mysql.config.js.map