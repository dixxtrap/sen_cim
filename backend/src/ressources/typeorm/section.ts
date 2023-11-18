import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cimetery } from './cimetery';
import { Row } from './row';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Cimetery, (cimetery) => cimetery.sections, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  cimetery: Cimetery;

  @OneToMany(() => Row, (row) => row.section, {
    cascade: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  rows: Row[];

  @Column({ nullable: true })
  name: string;
  @Column({ nullable: true })
  link: string;
  @Column({ nullable: true })
  comment: string;

  @Column({ nullable: true })
  laltitude: number;
  @Column({ nullable: true })
  longitude: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true })
  cimeteryId: number;
}
