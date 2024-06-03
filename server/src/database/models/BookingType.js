import { DataTypes } from "sequelize";

export default (sequelize) => {
    sequelize.define("Booking_Type_Table",
        {
            Booking_Type_Table_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            Booking_Type_name: {
                type: DataTypes.STRING(30)
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );
}