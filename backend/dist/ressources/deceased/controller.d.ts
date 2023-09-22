import { DeceasedService } from "./service";
import { DeceasedDto } from "./dto";
export declare class DeceasedController {
    private service;
    constructor(service: DeceasedService);
    get(): Promise<import("../../typeorm").Deceased[]>;
    getById(id: number): Promise<import("../../typeorm").Deceased>;
    create(body: DeceasedDto): Promise<import("../../typeorm").Deceased>;
    update(id: number, body: DeceasedDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
