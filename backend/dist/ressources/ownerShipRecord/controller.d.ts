import { OwnerShipRecordService } from './service';
import { OwnerShipRecordDto } from './dto';
export declare class OwnerShipRecordController {
    private service;
    constructor(service: OwnerShipRecordService);
    get(): Promise<import("../../typeorm").OwnerShipRecord[]>;
    getById(id: number): Promise<import("../../typeorm").OwnerShipRecord>;
    create(body: OwnerShipRecordDto): Promise<import("../../typeorm").OwnerShipRecord>;
    update(id: number, body: OwnerShipRecordDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): any;
}
