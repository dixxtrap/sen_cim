import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OwnerShipRecord } from "./ownerShipRecord";



@Entity()
export class ConcessionOwner{
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(()=> OwnerShipRecord, (osr)=> osr.concessionOwner, {
        cascade: true,
        nullable: true,
        onDelete : 'SET NULL'
    })
    ownerShipRecords: OwnerShipRecord[]
    
    @Column()
    firstName: String
    lastName: String
    address: String
    phone: number

}