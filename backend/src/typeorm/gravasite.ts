import {
  Column,
  Entity,
  Index,
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
@Index(['platNumber'], { unique: true })
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
  burials: Burial[];

  @OneToMany(() => OwnerShipRecord, (osr) => osr.gravesite, {
    cascade: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  ownerShipRecords: OwnerShipRecord[];

  @Column({ nullable: true, type: 'varchar', length: 30 })
  platNumber: string;
  @Column({ nullable: true, type: 'varchar', length: 30 })
  status: string;
  @Column({ nullable: true, type: 'varchar', length: 30 })
  purchase: Date;
  @Column({ nullable: true })
  rowId: number;
}
