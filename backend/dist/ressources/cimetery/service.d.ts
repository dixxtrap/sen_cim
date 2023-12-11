import { Cimetery } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { CimeteryDto } from './dto';
import { ExcelService } from 'src/utils/excel.service';
export declare class CimeteryService {
    private repos;
    private excelService;
    constructor(repos: Repository<Cimetery>, excelService: ExcelService);
    get(): Promise<Cimetery[]>;
    create(body: CimeteryDto): Promise<CimeteryDto & Cimetery>;
    createBulk({ path, body }: {
        path: string;
        body: CimeteryDto;
    }): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    getById(id: number): Promise<Cimetery>;
    update(id: number, body: CimeteryDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").UpdateResult>;
}
