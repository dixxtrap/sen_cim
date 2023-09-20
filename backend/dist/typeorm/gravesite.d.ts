import { Row } from "./row";
import { Burial } from "./burial";
import { OwnerShipRecord } from "./ownerShipRecord";
export declare class Gravesite {
    id: number;
    row: Row;
    burials: Burial[];
    ownerShipRecords: OwnerShipRecord[];
    platNumber: String;
    status: String;
    purchase: String;
    rowId: number;
}
