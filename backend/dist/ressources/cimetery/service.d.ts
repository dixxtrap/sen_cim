import { Cimetery } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class CimeteryService {
    private repos;
    constructor(repos: Repository<Cimetery>);
}
