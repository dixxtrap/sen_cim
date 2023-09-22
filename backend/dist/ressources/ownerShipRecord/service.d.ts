import { OwnerShipRecord } from "src/typeorm";
import { Repository } from "typeorm";
import { OwnerShipRecordDto } from "./dto";
export declare class OwnerShipRecordService {
    private repos;
    constructor(repos: Repository<OwnerShipRecord>);
    get(): Promise<OwnerShipRecord[]>;
    getById(id: number): Promise<OwnerShipRecord>;
    create(body: OwnerShipRecordDto): Promise<OwnerShipRecord>;
    update(id: number, body: OwnerShipRecordDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
