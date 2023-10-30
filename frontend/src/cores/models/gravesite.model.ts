import { Row } from "./row.model";

export interface Gravesite {
        id: number;
        platNumber: string;
        status: string;
        purchase: string;
        rowId: number;
        row: Row;
      }
      