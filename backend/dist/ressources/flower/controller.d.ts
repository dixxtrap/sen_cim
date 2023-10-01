import { FlowerService } from './service';
import { FlowerDto } from './dto';
export declare class FlowerController {
    private service;
    constructor(service: FlowerService);
    gets(): Promise<import("../../typeorm").Flower[]>;
    getById(id: number): Promise<import("../../typeorm").Flower>;
    create(body: FlowerDto): Promise<import("../../typeorm").Flower>;
    update(id: number, body: FlowerDto): Promise<import("typeorm").UpdateResult>;
}
