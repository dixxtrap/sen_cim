import { Row } from "src/typeorm";
import { Repository } from "typeorm";
import { RowDto } from "./dto";
export declare class RowServive {
    private repos;
    constructor(repos: Repository<Row>);
    get(): Promise<Row[]>;
    create(body: RowDto): Promise<Row>;
    getById(id: number): Promise<Row>;
    update(id: number, body: RowDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
