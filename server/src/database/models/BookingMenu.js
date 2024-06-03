import { DataTypes } from "sequelize";

export default (sequelize) => {
    sequelize.define("Booking_Menu_Table",
        {
            Booking_Table_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: "Booking_Table",
                    key: "Booking_Table_id"
                }
            },
            Menu_Table_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: "Menu_Table",
                    key: "Menu_Table_id"
                }
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );
}