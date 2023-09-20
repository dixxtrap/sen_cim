import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Burial } from "./burial";


@Entity()
export class Deceased{
    @PrimaryGeneratedColumn()
    id:number
    
    @OneToMany(()=> Burial, (burial)=> burial.deceased,{
        cascade: true,
        nullable: true,
        onDelete : 'SET NULL'
    })
    burials: Burial[]

    @Column()
    firstName: String
    lastName: String
    placeOfBirth: String
    placeOfDeath: String
    @CreateDateColumn()
    dateOfBirth: Date
    dateOfDeath: Date
    @Column()
    gender: String
    @Column()
    deaceasedPhoto: number

}