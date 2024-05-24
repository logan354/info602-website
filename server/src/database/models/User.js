import { DataTypes } from "sequelize";

export default (sequelize) => {
    sequelize.define("User_Table",
    {

    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
}