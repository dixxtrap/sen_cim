import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Gravesite } from "./gravesite";
import { Deceased } from "./deceased";



@Entity()
export class Burial {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> Gravesite, (gravesite)=> gravesite.burials, {
        onDelete: 'SET NULL',
        onUpdate : 'SET NULL',
        nullable: true
    })
    gravesite: Gravesite

    @ManyToOne(()=> Deceased, (deceased)=> deceased.burials, {
        onDelete: 'SET NULL',
        onUpdate : 'SET NULL',
        nullable: true
    })
    deceased: Deceased

    @CreateDateColumn()
    burialDate : Date
    @Column()
    funeralType : String
    @Column()
    issuingMunicipality : String
    @Column()
    burialPermitNumber:String
    @Column()
    issueIn: String
    @CreateDateColumn()
    dateOfIssuanceOfThePermit : Date
    @Column()
    receiptNumber: String
    @Column()
    amountPaid : number
    @Column()
    allocatedTombVaultArea: number
    @Column({nullable: true})
    gravesiteId: number
    @Column({nullable: true})
    deceasedId: number
}