import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Flower {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column({ nullable: true })
  comment: string;
  @Column({ nullable: true })
  photo: string;
  @CreateDateColumn()
  createsAt: Date;
  @UpdateDateColumn()
  updatedAt;
}
