import { Gravesite } from "./gravesite";
import { Deceased } from "./deceased";
export declare class Burial {
    id: number;
    gravesite: Gravesite;
    deceased: Deceased;
    burialDate: Date;
    funeralType: String;
    issuingMunicipality: String;
    burialPermitNumber: String;
    issueIn: String;
    dateOfIssuanceOfThePermit: Date;
    receiptNumber: String;
    amountPaid: number;
    allocatedTombVaultArea: number;
    gravesiteId: number;
    deceasedId: number;
}
