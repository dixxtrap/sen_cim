import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Flower } from './flower';

@Entity()
export class SharedFlower {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Flower)
  flower: Flower;
  @Column()
  flowerId: number;
  @Column()
  comment: string;
  @Column()
  sign: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
