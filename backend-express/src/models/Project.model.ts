import { AllowNull, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    tableName: 'projects'
})

class Project extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string

    @AllowNull(false)
    @Column({
        type: DataType.STRING(50 )
    })
    declare name: string

    @AllowNull(false)
    @Column({
        type: DataType.TEXT()
    })
    declare description: string

    @AllowNull(false)
    @Column({
        type: DataType.ENUM('progreso', 'finalizado')
    })
    declare state: 'progreso' | 'finalizado'

    @AllowNull(false)
    @Column({
        type: DataType.DATE()
    })
    declare dateStart : Date

    @AllowNull(false)
    @Column({
        type: DataType.DATE()
    })
    declare dateEnd : Date
}

export default Project