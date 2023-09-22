import { GravesiteService } from "./service";
import { GravesiteDto } from "./dto";
export declare class GravesiteController {
    private service;
    constructor(service: GravesiteService);
    get(): Promise<import("../../typeorm").Gravesite[]>;
    getById(id: number): Promise<import("../../typeorm").Gravesite>;
    create(body: GravesiteDto): Promise<import("../../typeorm").Gravesite>;
    update(id: number, body: GravesiteDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
