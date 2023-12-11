import { Repository } from 'typeorm';
import { DeceasedFlower, Flower } from '../typeorm';
import { FlowerDto } from './dto';
export declare class FlowerService {
    private repos;
    private reposDeceasedFlower;
    constructor(repos: Repository<Flower>, reposDeceasedFlower: Repository<DeceasedFlower>);
    gets(): Promise<Flower[]>;
    getById(id: number): Promise<Flower>;
    create(body: FlowerDto): Promise<Flower>;
    update(id: number, body: FlowerDto): Promise<import("typeorm").UpdateResult>;
}
