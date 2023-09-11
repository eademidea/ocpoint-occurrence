import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'tb_persons' })
export class Person extends Model<Person>{


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

    @Column({ type: DataType.STRING })
    document: string;

    @Column({ type: DataType.INTEGER })
    age: number;

    @Column({ type: DataType.STRING })
    gender: string;

    @Column({ type: DataType.DATE })
    creationDate: string;

    @Column({ type: DataType.DATE })
    updateDate: string;


}