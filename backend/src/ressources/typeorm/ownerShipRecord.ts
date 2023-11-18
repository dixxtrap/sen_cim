import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gravesite } from './gravasite';
import { ConcessionOwner } from './concessionOwner';

@Entity()
export class OwnerShipRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Gravesite, (gravesite) => gravesite.ownerShipRecords, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  gravesite: Gravesite;

  @ManyToOne(
    () => ConcessionOwner,
    (concessionOwner) => concessionOwner.ownerShipRecords,
    {
      onDelete: 'SET NULL',
      onUpdate: 'SET NULL',
      nullable: true,
    },
  )
  concessionOwner: ConcessionOwner;

  @Column({ nullable: true })
  ownerShipStartDate: Date;
  @Column({ nullable: true })
  gravesiteId: number;
  @Column({ nullable: true })
  concessionOwnerId: number;
}
