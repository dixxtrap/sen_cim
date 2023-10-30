import { PrimaryColumn } from 'typeorm';

export class ObituaryFlower {
  @PrimaryColumn()
  obituaryId: number;
  @PrimaryColumn()
  sharedFlowerId;
}
