import { Burial } from './burial';
export declare class Deceased {
    id: number;
    burial: Burial;
    firstName: string;
    lastName: string;
    placeOfBirth: string;
    placeOfDeath: string;
    dateOfBirth: Date;
    dateOfDeath: Date;
    gender: string;
    photo: string;
}
