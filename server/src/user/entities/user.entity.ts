import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', length: 30})
    name: string

    @Column({type:'varchar', length: 30, unique: true})
    username: string

    @Column({type:'varchar', length: 30, unique: true})
    email: string

    @Column({type:'varchar', length: 30})
    password: string

    @Column({ type: 'date', nullable: true })
    expireVipIn: Date;
}
