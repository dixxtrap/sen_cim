import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SharedFlower } from './sharedFlower';
import { Wishes } from './wishes';

@Entity()
export class Obituary {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  deceasedFirstname: string;
  @Column()
  deceasedLastname: string;
  @Column('date', { nullable: true, default: null })
  deceasedDate: Date;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column()
  cause: string;
  @Column({ default: null })
  placeOfDeath: string;
  @Column()
  fileName: string;
  @Column()
  fileUrl: string;
  @Column()
  userDisplayName: string;
  @ManyToMany(() => SharedFlower, {
    cascade: true,
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    eager: true,
  })
  @JoinTable()
  flowers: SharedFlower[];
  @ManyToMany(() => Wishes, {
    cascade: true,
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    eager: true,
  })
  @JoinTable()
  wishes: Wishes[];
}
