import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/user.entity";

@Table({ tableName: 'tb_occurrence', createdAt: false, updatedAt: false })
export class Occurrence extends Model<Occurrence>{

    @Column(
        {
            type: DataType.INTEGER
            , unique: true, autoIncrement: true
            , primaryKey: true
        }
    )
    id: number;


    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    collaboratorId: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    managerId: User;


    @Column({ type: DataType.DATE })
    creationDate: string;

    @Column({ type: DataType.DATE })
    updatedDate: string;


    @Column({ type: DataType.STRING })
    status: string;


}