import { DataTypes } from "sequelize";

export default (sequelize) => {
    sequelize.define("Booking_Table",
    {
        Booking_Table_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        User_Table_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "User_Table",
                key: "User_Table_id"
            }
        },
        Booking_Type_Table_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Booking_Type_Table",
                key: "Booking_Type_Table_id"
            }
        },
        Booking_Table_createdAt: {
            type: DataTypes.DATE
        },
        Booking_Table_date: {
            type: DataTypes.DATE
        },
        Booking_Table_location: {
            type: DataTypes.STRING(50)
        },
        Booking_Table_guests: {
            type: DataTypes.INTEGER
        },
        Booking_Table_notes: {
            type: DataTypes.STRING(280)
        },
        Booking_Table_status: {
            type: DataTypes.STRING(50)
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
}
