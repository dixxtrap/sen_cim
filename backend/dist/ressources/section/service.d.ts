import { Section } from 'src/ressources/typeorm';
import { Repository } from 'typeorm';
import { SectionDto } from './dto';
export declare class SectionService {
    private repos;
    constructor(repos: Repository<Section>);
    get(): Promise<Section[]>;
    create(body: SectionDto): Promise<Section>;
    getById(id: number): Promise<Section>;
    update(id: number, body: SectionDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
