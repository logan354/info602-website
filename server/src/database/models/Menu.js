import { DataTypes } from "sequelize";

export default (sequelize) => {
    sequelize.define("Menu_Table",
        {
            Menu_Table_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            Menu_Table_name: {
                type: DataTypes.STRING(30),
            },
            Menu_Table_description: {
                type: DataTypes.STRING(280),
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );
}