import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Burial } from './burial';
import { Wishes } from './wishes';
import { Flower } from './flower';
import { SharedFlower } from './sharedFlower';

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

  @Column({ nullable: true, type: 'varchar', length: 100 })
  firstName: string;
  @Column({ nullable: true, type: 'varchar', length: 100 })
  lastName: string;
  @Column({ nullable: true, type: 'varchar', length: 100 })
  placeOfBirth: string;
  @Column({ nullable: true, type: 'varchar', length: 100 })
  placeOfDeath: string;
  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;
  @Column({ nullable: true, default: null })
  dateOfDeath: Date;
  @Column({ nullable: true })
  gender: string;
  @Column({ nullable: true })
  photo: string;
  @ManyToMany(() => Wishes, {
    cascade: true,
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    eager: true,
  })
  @JoinTable()
  wishes: Wishes[];
  @ManyToMany(() => SharedFlower, {
    cascade: true,
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    eager: true,
  })
  @JoinTable()
  flowers: SharedFlower[];
}
