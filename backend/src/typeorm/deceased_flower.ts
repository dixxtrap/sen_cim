import { Entity, PrimaryColumn } from 'typeorm';

@Entity('deceased_flowers_shared_flower')
export class DeceasedFlower {
  @PrimaryColumn()
  deceasedId: number;
  @PrimaryColumn()
  sharedFlowerId: number;
}
