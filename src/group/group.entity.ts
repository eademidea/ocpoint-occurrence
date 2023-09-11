import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'tb_group' })
export class Group extends Model<Group> {

    @Column(
        {
            type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        }
    )
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.DATE })
    creationDate: string;

    @Column({ type: DataType.DATE })
    updateDate: string;
}