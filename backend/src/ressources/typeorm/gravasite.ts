import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Row } from './row';
import { Burial } from './burial';
import { OwnerShipRecord } from './ownerShipRecord';

@Entity()
export class Gravesite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Row, (row) => row.gravesites, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  row: Row;

  @OneToOne(() => Burial, (burial) => burial.gravesite, {
    cascade: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  burials: Burial;

  @ManyToOne(() => OwnerShipRecord)
  ownerShipRecord: OwnerShipRecord;

  @Column({ nullable: true, type: 'varchar', length: 30 })
  platNumber: string;
  @Column({ nullable: true, type: 'varchar', length: 30 })
  status: string;
  @Column({ nullable: true, type: 'varchar', length: 30 })
  purchase: Date;
  @Column({ nullable: true })
  rowId: number;
}
