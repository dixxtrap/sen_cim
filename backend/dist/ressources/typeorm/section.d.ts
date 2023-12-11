import { Cimetery } from './cimetery';
import { Row } from './row';
export declare class Section {
    id: number;
    cimetery: Cimetery;
    rows: Row[];
    name: string;
    link: string;
    comment: string;
    laltitude: number;
    longitude: number;
    createdAt: Date;
    updatedAt: Date;
    cimeteryId: number;
    beforeInser(): Promise<void>;
}
