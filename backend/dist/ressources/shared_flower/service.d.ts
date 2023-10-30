import { DeceasedFlower, SharedFlower } from 'src/typeorm';
import { Repository } from 'typeorm';
import { SharedFlowerDto } from './dto';
export declare class SharedFlowerService {
    private repos;
    private reposDeceasedFlower;
    constructor(repos: Repository<SharedFlower>, reposDeceasedFlower: Repository<DeceasedFlower>);
    create(body: SharedFlowerDto): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    getS(): Promise<SharedFlower[]>;
}
