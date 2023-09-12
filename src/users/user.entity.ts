import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Group } from "src/group/group.entity";
import { Person } from "src/persons/person.entity";

@Table({ tableName: 'tb_users', createdAt: false, updatedAt: false })
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

    @Column({ type: DataType.STRING })
    password: string;

    @Column({ type: DataType.STRING })
    role: string;

    @Column({ type: DataType.DATE })
    update_date: string;

    @Column({ type: DataType.DATE })
    creation_date: string;

    @ForeignKey(() => Group)
    @Column({ type: DataType.INTEGER })
    group_id: number;

    @ForeignKey(() => Person)
    @Column({ type: DataType.INTEGER })
    person_id: number;
}