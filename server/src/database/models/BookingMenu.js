import { DataTypes } from "sequelize";

export default (sequelize) => {
    sequelize.define("Booking_User_Table",
    {

    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
}