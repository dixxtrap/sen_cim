"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whises = exports.Deceased = exports.Row = exports.Gravesite = exports.ConcessionOwner = exports.OwnerShipRecord = exports.Burial = exports.Section = exports.Cimetery = exports.entities = void 0;
const burial_1 = require("./burial");
Object.defineProperty(exports, "Burial", { enumerable: true, get: function () { return burial_1.Burial; } });
const cimetery_1 = require("./cimetery");
Object.defineProperty(exports, "Cimetery", { enumerable: true, get: function () { return cimetery_1.Cimetery; } });
const concessionOwner_1 = require("./concessionOwner");
Object.defineProperty(exports, "ConcessionOwner", { enumerable: true, get: function () { return concessionOwner_1.ConcessionOwner; } });
const deceased_1 = require("./deceased");
Object.defineProperty(exports, "Deceased", { enumerable: true, get: function () { return deceased_1.Deceased; } });
const gravasite_1 = require("./gravasite");
Object.defineProperty(exports, "Gravesite", { enumerable: true, get: function () { return gravasite_1.Gravesite; } });
const ownerShipRecord_1 = require("./ownerShipRecord");
Object.defineProperty(exports, "OwnerShipRecord", { enumerable: true, get: function () { return ownerShipRecord_1.OwnerShipRecord; } });
const row_1 = require("./row");
Object.defineProperty(exports, "Row", { enumerable: true, get: function () { return row_1.Row; } });
const section_1 = require("./section");
Object.defineProperty(exports, "Section", { enumerable: true, get: function () { return section_1.Section; } });
const wishes_1 = require("./wishes");
Object.defineProperty(exports, "Whises", { enumerable: true, get: function () { return wishes_1.Whises; } });
exports.entities = [
    cimetery_1.Cimetery,
    section_1.Section,
    burial_1.Burial,
    ownerShipRecord_1.OwnerShipRecord,
    concessionOwner_1.ConcessionOwner,
    gravasite_1.Gravesite,
    row_1.Row,
    deceased_1.Deceased,
    wishes_1.Whises,
];
//# sourceMappingURL=index.js.map