import { OwnerShipRecord } from './ownerShipRecord';
export declare class ConcessionOwner {
    id: number;
    ownerShipRecords: OwnerShipRecord[];
    firstName: string;
    lastName: string;
    address: string;
    phone: number;
    createdAt: Date;
    updatedAt: Date;
}
