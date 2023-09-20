import { Burial } from "./burial";
export declare class Deceased {
    id: number;
    burials: Burial[];
    firstName: String;
    lastName: String;
    placeOfBirth: String;
    placeOfDeath: String;
    dateOfBirth: Date;
    dateOfDeath: Date;
    gender: String;
    deaceasedPhoto: number;
}
