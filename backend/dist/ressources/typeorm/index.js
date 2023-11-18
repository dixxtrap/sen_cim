"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Obituary = exports.SharedFlower = exports.Flower = exports.Wishes = exports.DeceasedFlower = exports.DeceasedWishes = exports.Deceased = exports.Row = exports.Gravesite = exports.ConcessionOwner = exports.OwnerShipRecord = exports.Burial = exports.Section = exports.Cimetery = exports.entities = void 0;
const burial_1 = require("./burial");
Object.defineProperty(exports, "Burial", { enumerable: true, get: function () { return burial_1.Burial; } });
const cimetery_1 = require("./cimetery");
Object.defineProperty(exports, "Cimetery", { enumerable: true, get: function () { return cimetery_1.Cimetery; } });
const concessionOwner_1 = require("./concessionOwner");
Object.defineProperty(exports, "ConcessionOwner", { enumerable: true, get: function () { return concessionOwner_1.ConcessionOwner; } });
const deceased_1 = require("./deceased");
Object.defineProperty(exports, "Deceased", { enumerable: true, get: function () { return deceased_1.Deceased; } });
const flower_1 = require("./flower");
Object.defineProperty(exports, "Flower", { enumerable: true, get: function () { return flower_1.Flower; } });
const gravasite_1 = require("./gravasite");
Object.defineProperty(exports, "Gravesite", { enumerable: true, get: function () { return gravasite_1.Gravesite; } });
const ownerShipRecord_1 = require("./ownerShipRecord");
Object.defineProperty(exports, "OwnerShipRecord", { enumerable: true, get: function () { return ownerShipRecord_1.OwnerShipRecord; } });
const row_1 = require("./row");
Object.defineProperty(exports, "Row", { enumerable: true, get: function () { return row_1.Row; } });
const section_1 = require("./section");
Object.defineProperty(exports, "Section", { enumerable: true, get: function () { return section_1.Section; } });
const wishes_1 = require("./wishes");
Object.defineProperty(exports, "Wishes", { enumerable: true, get: function () { return wishes_1.Wishes; } });
const deceased_wish_1 = require("./deceased_wish");
Object.defineProperty(exports, "DeceasedWishes", { enumerable: true, get: function () { return deceased_wish_1.DeceasedWishes; } });
const deceased_flower_1 = require("./deceased_flower");
Object.defineProperty(exports, "DeceasedFlower", { enumerable: true, get: function () { return deceased_flower_1.DeceasedFlower; } });
const sharedFlower_1 = require("./sharedFlower");
Object.defineProperty(exports, "SharedFlower", { enumerable: true, get: function () { return sharedFlower_1.SharedFlower; } });
const obituary_1 = require("./obituary");
Object.defineProperty(exports, "Obituary", { enumerable: true, get: function () { return obituary_1.Obituary; } });
exports.entities = [
    cimetery_1.Cimetery,
    section_1.Section,
    burial_1.Burial,
    ownerShipRecord_1.OwnerShipRecord,
    concessionOwner_1.ConcessionOwner,
    gravasite_1.Gravesite,
    row_1.Row,
    deceased_1.Deceased,
    deceased_wish_1.DeceasedWishes,
    deceased_flower_1.DeceasedFlower,
    wishes_1.Wishes,
    flower_1.Flower,
    sharedFlower_1.SharedFlower,
    obituary_1.Obituary,
];
//# sourceMappingURL=index.js.map