import { Burial, Deceased, Gravesite } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { DeceasedDto, SearchDeceasedDto } from './dto';
import { PaginationDto } from 'src/utils/pagination_dto';
import { ExcelService } from 'src/utils/excel.service';
import { SectionService } from '../section/service';
import { RowServive } from '../row/service';
import { OwnerShipRecordService } from '../ownerShipRecord/service';
export declare class DeceasedService {
    private repos;
    private burial;
    private section;
    private row;
    private owner;
    private gravesite;
    private excelService;
    constructor(repos: Repository<Deceased>, burial: Repository<Burial>, section: SectionService, row: RowServive, owner: OwnerShipRecordService, gravesite: Repository<Gravesite>, excelService: ExcelService);
    get(): Promise<Deceased[]>;
    search(body: SearchDeceasedDto, pagination: PaginationDto): Promise<Deceased[]>;
    getById(id: number): Promise<Deceased>;
    create2(body: DeceasedDto): Promise<Burial>;
    bulk({ path, body }: {
        path: string;
        body: DeceasedDto;
    }): Promise<{
        status: number;
        code: string;
        message: string;
    }>;
    update(id: number, body: DeceasedDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
