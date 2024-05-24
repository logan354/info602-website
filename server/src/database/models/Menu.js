import { DataTypes } from "sequelize";

export default (sequelize) => {
    return sequelize.define("Menu_Table",
    {
        Menu_Table_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Menu_Table_description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);
}