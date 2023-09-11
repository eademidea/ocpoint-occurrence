import { Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../users/user.entity";

@Table({ tableName: 'tb_occurrence' })
export class Occurrence extends Model<Occurrence>{

    @Column(
        {
            type: DataType.INTEGER
            , unique: true, autoIncrement: true
            , primaryKey: true
        }
    )
    id: number;

    collaboratorId: User;

    managerId: User;

    creationDate: string;

    status: string;


}