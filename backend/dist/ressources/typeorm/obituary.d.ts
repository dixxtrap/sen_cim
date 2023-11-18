import { SharedFlower } from './sharedFlower';
import { Wishes } from './wishes';
export declare class Obituary {
    id: number;
    deceasedFirstname: string;
    deceasedLastname: string;
    deceasedDate: Date;
    createdAt: Date;
    updatedAt: Date;
    cause: string;
    placeOfDeath: string;
    fileName: string;
    fileUrl: string;
    userDisplayName: string;
    flowers: SharedFlower[];
    wishes: Wishes[];
}
