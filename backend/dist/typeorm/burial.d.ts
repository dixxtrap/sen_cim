import { Gravesite } from './gravasite';
import { Deceased } from './deceased';
export declare class Burial {
    id: number;
    gravesite: Gravesite;
    deceased: Deceased;
    burialDate: Date;
    funeralType: string;
    issuingMunicipality: string;
    burialPermitNumber: string;
    issueIn: string;
    createdAt: Date;
    updatedAt: Date;
    dateOfIssuanceOfThePermit: Date;
    receiptNumber: string;
    amountPaid: number;
    allocatedTombVaultArea: number;
    gravesiteId: number;
    deceasedId: number;
}
