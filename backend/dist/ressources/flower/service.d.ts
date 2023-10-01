import { Repository } from 'typeorm';
import { Flower } from '../../typeorm';
import { FlowerDto } from './dto';
export declare class FlowerService {
    private repos;
    constructor(repos: Repository<Flower>);
    gets(): Promise<Flower[]>;
    getById(id: number): Promise<Flower>;
    create(body: FlowerDto): Promise<Flower>;
    update(id: number, body: FlowerDto): Promise<import("typeorm").UpdateResult>;
}
