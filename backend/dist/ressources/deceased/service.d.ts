import { Deceased } from "src/typeorm";
import { Repository } from "typeorm";
import { DeceasedDto } from "./dto";
export declare class DeceasedService {
    private repos;
    constructor(repos: Repository<Deceased>);
    get(): Promise<Deceased[]>;
    getById(id: number): Promise<Deceased>;
    create(body: DeceasedDto): Promise<Deceased>;
    update(id: number, body: DeceasedDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
