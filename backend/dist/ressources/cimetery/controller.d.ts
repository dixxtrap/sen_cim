/// <reference types="multer" />
import { CimeteryService } from './service';
import { CimeteryDto } from './dto';
export declare class CimeteryController {
    private service;
    constructor(service: CimeteryService);
    get(): Promise<import("../typeorm").Cimetery[]>;
    getById(id: number): Promise<import("../typeorm").Cimetery>;
    createBulk(body: any): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    addPhoto(id: number, file: Express.Multer.File, body: CimeteryDto): Promise<import("typeorm").UpdateResult>;
    update(id: number, body: CimeteryDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").UpdateResult>;
    create(body: CimeteryDto): Promise<import("../typeorm").Cimetery>;
}
