import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OwnerShipRecord } from './ownerShipRecord';

@Entity()
export class ConcessionOwner {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => OwnerShipRecord, (osr) => osr.concessionOwner, {
    cascade: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  ownerShipRecords: OwnerShipRecord[];

  @Column({ nullable: true })
  firstName: string;
  @Column({ nullable: true })
  lastName: string;
  @Column({ nullable: true })
  address: string;
  @Column({ nullable: true })
  phone: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
