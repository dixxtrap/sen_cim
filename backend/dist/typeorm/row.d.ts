import { Section } from './section';
import { Gravesite } from './gravasite';
export declare class Row {
    id: number;
    section: Section;
    gravesites: Gravesite[];
    numero: String;
    emplacement: String;
    capacity: number;
    sectionId: number;
}
