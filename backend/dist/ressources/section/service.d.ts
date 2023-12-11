import { Section } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { SectionDto } from './dto';
import { ExcelService } from 'src/utils/excel.service';
export declare class SectionService {
    private repos;
    private excelService;
    constructor(repos: Repository<Section>, excelService: ExcelService);
    bulk({ path, body }: {
        path: string;
        body: SectionDto;
    }): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    get(): Promise<Section[]>;
    create(body: SectionDto): Promise<Section>;
    getById(id: number): Promise<Section>;
    update(id: number, body: SectionDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
