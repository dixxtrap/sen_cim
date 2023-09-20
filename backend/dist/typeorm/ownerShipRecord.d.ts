import { Gravesite } from "./gravesite";
import { ConcessionOwner } from "./concessionOwner";
export declare class OwnerShipRecord {
    id: number;
    gravesite: Gravesite;
    concessionOwner: ConcessionOwner;
    ownerShipStartDate: Date;
    gravesiteId: number;
    concessionOwnerId: number;
}
