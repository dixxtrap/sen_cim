import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ orderBy: { createdAt: 'DESC' } })
export class Wishes {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text', { nullable: false })
  wish: string;
  @Column()
  sign: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
