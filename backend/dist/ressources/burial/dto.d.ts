import { SearchDeceasedDto } from '../deceased/dto';
export declare class BurialDto {
    id: number;
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
export declare class SearchBurialDto extends SearchDeceasedDto {
    cimeteryName: string;
    burialDate: Date;
}
