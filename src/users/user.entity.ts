import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'tb_users' })
export class User extends Model<User> {

    @Column(
        {
            type: DataType.INTEGER
            , unique: true
            , autoIncrement: true
            , primaryKey: true
        }
    )
    id: number;

    @Column({ type: DataType.STRING, unique: true })
    user_name: string;

    @Column({type:DataType.DATE})
    creation_date: string;

    @Column({type:DataType.STRING })
    password: string;

    @Column({type:DataType.STRING })
    role: string;

    @Column({type:DataType.DATE})
    update_date: string;

    @Column({type:DataType.DATE})
    group_id: number;

    //TODO: Estou aqui ... 
    @Column()
    person_id: number;
}