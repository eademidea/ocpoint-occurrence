import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    id: number;

    @Column('user_name')
    username: string;

    @Column('creation_date')
    creationDate: string;

    @Column('password')
    password: string;

    @Column('role')
    role: string;

    @Column('update_date')
    updateDate: string;

    @Column('group_id')
    groupId: number;

    @Column('person_id')
    personId: number;
}