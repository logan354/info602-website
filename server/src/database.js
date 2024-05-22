import fs from "node:fs";
import { Sequelize } from "sequelize";

// Database
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: "mssql"
});

const models = [];

async function connect() {
    try {
        console.log("Connecting to database");
        await sequelize.authenticate();
        console.log("Connection to database successfully established")
    }
    catch (e) {
        console.error("Failed to connect to the database", e);
    }

    loadModels();
}

async function loadModels() {
    fs.readdir("./models", (files) => {
        for (let file in files) {
            const model = require(`./models/${file}`);
            model(sequelize);
        }
    });
}

async function close() { }

export { connect, close };

export default sequelize;