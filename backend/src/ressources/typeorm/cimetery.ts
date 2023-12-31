import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  Index,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Section } from './section';

@Entity()
@Index(['name'], { unique: true })
@Index(['name', 'country'], { unique: true })
export class Cimetery {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => Section, (section) => section.cimetery, {
    cascade: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  sections: Section[];
  @Column('varchar')
  name: string;
  @Column('varchar', { nullable: true })
  email: string;
  @Column('text', { nullable: true })
  description: string;
  @Column('varchar', { nullable: true })
  address: string;
  @Column('varchar', { default: 'Dakar' })
  city: string;
  @Column('varchar', { default: 'Senegal' })
  country: string;
  @Column('text', { nullable: true })
  link: string;
  @Column('varchar', { nullable: true })
  phone: string;
  @Column('double', { default: 0, nullable: true })
  laltitude: number;
  @Column('double', { default: 0, nullable: true })
  longitude: number;
  @Column('bool', { default: true, nullable: true })
  isActive: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true, default: null })
  photo: string;
  @Column({ nullable: true, default: null })
  photoName: string;
  @Column({ nullable: true, default: null })
  confession: string;
}
