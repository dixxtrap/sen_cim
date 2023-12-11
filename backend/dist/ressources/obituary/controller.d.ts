/// <reference types="multer" />
import { ObituaryService } from './service';
import { ObituaryDto } from './dto';
import { Response } from 'express';
export declare class ObituaryController {
    private service;
    constructor(service: ObituaryService);
    create(body: ObituaryDto, file: Express.Multer.File): Promise<import("../typeorm").Obituary>;
    getFile(res: Response, name: string): Promise<void>;
    find(): Promise<import("../typeorm").Obituary[]>;
}
