export declare class DeceasedDto {
    sectionName: string;
    rowName: string;
    platNumber: string;
    burialDate: Date;
    burialDateMonth?: string;
    burialDateDay?: string;
    burialDateYear?: string;
    burialPermitNumber: string;
    id?: number;
    firstName: string;
    lastName: string;
    placeOfBirth: string;
    placeOfDeath: string;
    dateOfBirth?: Date;
    dateOfBirthStr?: string;
    dateOfDeathDay?: string;
    dateOfDeathMonth?: string;
    dateOfDeathYear?: string;
    dateOfDeath: Date;
    dateOfDeathStr?: string;
    gender?: string;
    photo?: string;
    cimeteryId?: number;
    ownShipName?: string;
    ownShipAddress?: string;
    ownShipPhone?: string;
}
export declare class SearchDeceasedDto {
    firstName: string;
    lastName: string;
    year: number;
}
