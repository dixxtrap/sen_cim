import { Section } from './section';
import { Gravesite } from './gravasite';
export declare class Row {
    id: number;
    section: Section;
    gravesites: Gravesite[];
    numero: string;
    emplacement: string;
    capacity: number;
    sectionId: number;
    beforeInser(): Promise<void>;
}
