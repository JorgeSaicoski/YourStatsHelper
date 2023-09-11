import { Column, PrimaryGeneratedColumn } from "typeorm";


export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', length: 30})
    name: string

    @Column({type:'varchar', length: 30})
    username: string

    @Column({type:'varchar', length: 30})
    email: string

    @Column({type:'varchar', length: 30})
    password: string
}
