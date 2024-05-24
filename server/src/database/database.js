import dotenv from "dotenv";

import { Sequelize } from "sequelize";

import UserModel from "./models/User.js";
import MenuModel from "./models/Menu.js";
import BookingModel from "./models/Booking.js";
import BookingMenuModel from "./models/BookingMenu.js";
import BookingTypeModel from "./models/BookingType.js";

dotenv.config();

// Initiate database
// **IMPORTANT** Make sure that database user is a sysadmin
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    dialect: "mssql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
});

// Define models
UserModel(sequelize);
MenuModel(sequelize);
BookingModel(sequelize);
BookingMenuModel(sequelize);
BookingTypeModel(sequelize);

export default sequelize;