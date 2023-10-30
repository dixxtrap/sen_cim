import { Obituary } from 'src/typeorm';
import { Repository } from 'typeorm';
import { ObituaryDto } from './dto';
export declare class ObituaryService {
    private repos;
    constructor(repos: Repository<Obituary>);
    create(body: ObituaryDto): Promise<Obituary>;
    find(): Promise<Obituary[]>;
}
