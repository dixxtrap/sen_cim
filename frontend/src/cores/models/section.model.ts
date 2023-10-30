import { Cimetery } from "./cimetery.model";

export interface Section {
        id: number;
        name: string;
        link: string;
        comment: string;
        laltitude: string;
        longitude: string;
        createdAt: string;
        updatedAt: string;
        cimeteryId: number;
        cimetery: Cimetery;
      }
      