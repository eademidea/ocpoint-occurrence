import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: 'tb_occurrence' })
export class Occurrence {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('user_id')
    userId: User;


    @Column('manager_id')
    managerId: User;




}