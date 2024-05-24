import dotenv from "dotenv";

import { Sequelize } from "sequelize";

import UserModel from "./models/User";
import MenuModel from "./models/Menu";
import BookingModel from "./models/Booking";
import BookingMenuModel from "./models/BookingMenu";
import BookingTypeModel from "./models/BookingType";

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


async function connect() {
    try {
        console.log("Connecting to database");
        await sequelize.authenticate();
        console.log("Connection to database successfully established")
    }
    catch (e) {
        console.error("Failed to connect to the database", e);
        throw e;
    }
}

export { connect }

export default sequelize;