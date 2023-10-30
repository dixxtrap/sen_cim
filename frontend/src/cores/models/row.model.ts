import { Section } from "./section.model";

export interface Row {
        id: number;
        numero: string;
        emplacement: string;
        capacity: string;
        sectionId: number;
        section: Section;
      }
      