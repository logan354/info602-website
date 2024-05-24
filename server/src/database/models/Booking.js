import { DataTypes } from "sequelize";

export default (sequelize) => {
    sequelize.define("Booking_Table",
    {

    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
}
