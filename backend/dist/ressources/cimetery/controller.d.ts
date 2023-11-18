import { CimeteryService } from './service';
import { CimeteryDto } from './dto';
export declare class CimeteryController {
    private service;
    constructor(service: CimeteryService);
    get(): Promise<import("../typeorm").Cimetery[]>;
    getById(id: number): Promise<import("../typeorm").Cimetery>;
    create(body: CimeteryDto): Promise<import("../typeorm").Cimetery>;
    update(id: number, body: CimeteryDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").UpdateResult>;
}
