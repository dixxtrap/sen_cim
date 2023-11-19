import { Cimetery } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { CimeteryDto } from './dto';
export declare class CimeteryService {
    private repos;
    constructor(repos: Repository<Cimetery>);
    get(): Promise<Cimetery[]>;
    create(body: CimeteryDto): Promise<Cimetery>;
    createBulk(body: [CimeteryDto]): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    getById(id: number): Promise<Cimetery>;
    update(id: number, body: CimeteryDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").UpdateResult>;
}
