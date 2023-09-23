import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Burial } from './burial';

@Entity()
export class Deceased {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Burial, (burial) => burial.deceased, {
    cascade: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  burial: Burial;

  @Column({ nullable: true, type: 'varchar', length: 30 })
  firstName: string;
  @Column({ nullable: true, type: 'varchar', length: 30 })
  lastName: string;
  @Column({ nullable: true, type: 'varchar', length: 30 })
  placeOfBirth: string;
  @Column({ nullable: true, type: 'varchar', length: 30 })
  placeOfDeath: string;
  @Column({ nullable: true })
  dateOfBirth: Date;
  @Column({ nullable: true })
  dateOfDeath: Date;
  @Column({ nullable: true })
  gender: string;
  @Column({ nullable: true })
  photo: string;
}
