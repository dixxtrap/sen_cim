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
  BeforeInsert,
  AfterLoad,
} from 'typeorm';

import { Section } from './section';
import { Gravesite } from './gravasite';

@Entity()
@Index(['sectionId', 'numero'], { unique: true })
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

  @Column({ nullable: true, default: '-' })
  numero: string;
  @Column({ nullable: true })
  emplacement: string;
  @Column({ nullable: true })
  capacity: number;
  @Column({ nullable: true })
  sectionId: number;
  @BeforeInsert()
  @AfterLoad()
  async beforeInser() {
    this.numero = (
      this.numero === '' || this.numero === null || this.numero === '--'
        ? '-'
        : this.numero
    )
      .toLowerCase()
      .trim();
  }
}
