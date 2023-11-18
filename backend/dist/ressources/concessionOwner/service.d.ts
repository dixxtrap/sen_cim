import { ConcessionOwner } from "src/ressources/typeorm";
import { Repository } from "typeorm";
import { ConcessionOwnerDto } from "./dto";
export declare class ConcessionOwnerService {
    private repos;
    constructor(repos: Repository<ConcessionOwner>);
    get(): Promise<ConcessionOwner[]>;
    getById(id: number): Promise<ConcessionOwner>;
    create(body: ConcessionOwnerDto): Promise<ConcessionOwner>;
    update(id: number, body: ConcessionOwnerDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
