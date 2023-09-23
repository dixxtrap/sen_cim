import { Gravesite } from 'src/typeorm';
import { Repository } from 'typeorm';
import { GravesiteDto } from './dto';
export declare class GravesiteService {
    private repos;
    constructor(repos: Repository<Gravesite>);
    get(): Promise<Gravesite[]>;
    create(body: GravesiteDto): Promise<Gravesite>;
    getById(id: number): Promise<Gravesite>;
    update(id: number, body: GravesiteDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
