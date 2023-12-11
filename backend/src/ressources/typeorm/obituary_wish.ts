import { PrimaryColumn } from 'typeorm';

export class ObituaryWish {
  @PrimaryColumn()
  obituaryId: number;
  @PrimaryColumn()
  wishesId: number;
}
