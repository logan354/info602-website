import { DataTypes } from "sequelize";

export default (sequelize) => {
    sequelize.define("User_Table",
        {
            User_Table_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            User_Table_username: {
                type: DataTypes.STRING(40),
            },
            User_Table_password: {
                type: DataTypes.STRING(40),
            },
            User_Table_firstName: {
                type: DataTypes.STRING(30),
            },
            User_Table_lastName: {
                type: DataTypes.STRING(30),
            },
            User_Table_email: {
                type: DataTypes.STRING(50)
            },
            User_Table_phone: {
                type: DataTypes.STRING(12)
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );
}