import { DataTypes } from "sequelize";

export default (sequelize) => {
    sequelize.define("Menu_Table",
        {
            Menu_Table_ID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            Menu_Table_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Menu_Table_description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );
}