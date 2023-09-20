import { Column, Entity, Index, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Row } from "./row";
import { Burial } from "./burial";
import { OwnerShipRecord } from "./ownerShipRecord";

@Entity()
@Index(['platNumber'], {unique: true})
export class Gravesite{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=> Row, (row)=> row.gravesites, {
        onDelete: 'SET NULL',
        onUpdate: "SET NULL",
        nullable : true
    } )
    row: Row

    @OneToMany(()=> Burial, (burial)=> burial.gravesite,{
        cascade: true,
        nullable: true,
        onDelete : 'SET NULL'
    })
    burials: Burial[]

    @OneToMany(()=> OwnerShipRecord, (osr)=> osr.gravesite,{
        cascade: true,
        nullable: true,
        onDelete : 'SET NULL'
    })
    ownerShipRecords : OwnerShipRecord[]

    @Column()
    platNumber: String
    @Column()
    status: String
    @Column()
    purchase: String
    @Column({nullable: true})
    rowId: number
}