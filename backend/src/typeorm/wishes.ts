import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Whises{

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    whishe: string
}