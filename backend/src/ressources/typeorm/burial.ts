import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
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

  @OneToOne(() => Gravesite, (gravesite) => gravesite.burials, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  @JoinColumn()
  gravesite: Gravesite;

  @OneToOne(() => Deceased, (deceased) => deceased.burial, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
    nullable: true,
  })
  @JoinColumn()
  deceased: Deceased;

  @Column({ nullable: true, default: null })
  burialDate: Date;
  @Column({ nullable: true, default: null })
  funeralType: string;
  @Column({ nullable: true, default: null })
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
