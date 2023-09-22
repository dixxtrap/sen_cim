import { ConcessionOwnerService } from "./service";
import { ConcessionOwnerDto } from "./dto";
export declare class ConcessionOwnerController {
    private service;
    constructor(service: ConcessionOwnerService);
    get(): Promise<import("../../typeorm").ConcessionOwner[]>;
    getById(id: number): Promise<import("../../typeorm").ConcessionOwner>;
    create(body: ConcessionOwnerDto): Promise<import("../../typeorm").ConcessionOwner>;
    update(id: number, body: ConcessionOwnerDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
