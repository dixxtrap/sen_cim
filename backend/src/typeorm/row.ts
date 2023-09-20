import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  Index,
  ManyToOne,
} from 'typeorm';

import { Section } from './section';
import { Gravesite } from './gravasite';

@Entity()
export class Row {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Section, (section) => section.rows, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  section: Section;

  @OneToMany(() => Gravesite, (gravesite) => gravesite.row, {
    cascade: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  gravesites: Gravesite[];

  @Column({ nullable: true })
  numero: string;
  @Column({ nullable: true })
  emplacement: string;
  @Column({ nullable: true })
  capacity: number;
  @Column({ nullable: true })
  sectionId: number;
}
