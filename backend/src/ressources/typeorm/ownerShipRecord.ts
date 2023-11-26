import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gravesite } from './gravasite';

@Entity()
export class OwnerShipRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Gravesite, (gravesite) => gravesite.ownerShipRecord, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  gravesite: Gravesite[];
  @Column({ nullable: true, default: null })
  ownerShipStartDate: Date;
  @Column({ nullable: true })
  gravesiteId: number;
  @Column({ nullable: true, default: null })
  ownerName: string;
  @Column({ nullable: true, default: null })
  ownerAddress: string;
  @Column({ nullable: true, default: null })
  ownerPhone: string;
}
