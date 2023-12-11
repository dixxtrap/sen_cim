import { RowServive } from './service';
import { RowDto } from './dto';
export declare class RowController {
    private service;
    constructor(service: RowServive);
    get(): Promise<import("../typeorm").Row[]>;
    getById(id: number): Promise<import("../typeorm").Row>;
    create(body: RowDto): Promise<import("../typeorm").Row>;
    update(id: number, body: RowDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
