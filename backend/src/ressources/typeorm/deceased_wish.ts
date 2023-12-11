import { Entity, PrimaryColumn } from 'typeorm';

@Entity('deceased_wishes_wishes')
export class DeceasedWishes {
  @PrimaryColumn()
  deceasedId: number;
  @PrimaryColumn()
  wishesId: number;
}
