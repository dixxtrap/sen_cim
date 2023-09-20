import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Gravesite } from './gravasite';
import { Deceased } from './deceased';

@Entity()
export class Burial {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Gravesite, (gravesite) => gravesite.burials, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  gravesite: Gravesite;

  @OneToOne(() => Deceased, (deceased) => deceased.burials, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  deceased: Deceased;

  @CreateDateColumn()
  burialDate: Date;
  @Column({ nullable: true })
  funeralType: string;
  @Column({ nullable: true })
  issuingMunicipality: string;
  @Column({ nullable: true })
  burialPermitNumber: string;
  @Column({ nullable: true })
  issueIn: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true })
  dateOfIssuanceOfThePermit: Date;
  @Column({ nullable: true })
  receiptNumber: string;
  @Column({ nullable: true })
  amountPaid: number;
  @Column({ nullable: true })
  allocatedTombVaultArea: number;
  @Column({ nullable: true })
  gravesiteId: number;
  @Column({ nullable: true })
  deceasedId: number;
}
