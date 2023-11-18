import { Burial } from './burial';
import { Wishes } from './wishes';
import { SharedFlower } from './sharedFlower';
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
    wishes: Wishes[];
    flowers: SharedFlower[];
}
