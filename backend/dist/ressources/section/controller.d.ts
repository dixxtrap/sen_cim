/// <reference types="multer" />
import { SectionService } from './service';
import { SectionDto } from './dto';
export declare class SectionController {
    private service;
    constructor(service: SectionService);
    get(): Promise<import("../typeorm").Section[]>;
    getById(id: number): Promise<import("../typeorm").Section>;
    bulk(body: SectionDto, file: Express.Multer.File): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    create(body: SectionDto): Promise<import("../typeorm").Section>;
    update(id: number, body: SectionDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
