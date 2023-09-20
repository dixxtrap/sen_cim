import { Section } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class SectionService {
    private repos;
    constructor(repos: Repository<Section>);
}
