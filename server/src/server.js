import dotenv from "dotenv/config";
import express from "express";

import sequelize from "./database/database.js";

import apiRouter from "./routes/api.js";
import usersRouter from "./routes/users.js";
import bookingsRouter from "./routes/bookings.js";
import menuRouter from "./routes/menu.js";

// Database
console.log("Database Connecting. . .");

try {
  await sequelize.authenticate();
  console.log("Database Connection Successfully Established!");
}
catch (error) {
  console.error("Database Connection Failed!", error);
  throw error;
}


// Server
console.log("Server Starting. . .");

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

/**
 * Routes
 * Base: localhost:3000/api
 * 
 * GET
 * /users
 * /users/:id
 * /menus
 * /menus/:id
 * /bookings/
 * /bookings/:id
 * /bookings/bookingTypes
 * /bookings/bookingTypes/:id
 * 
 * POST
 * /users
 * /bookings
 * 
 * PUT
 * /bookings/:id
 * 
 * DELETE
 */

app.use("/api", apiRouter);

app.use("/api/users", usersRouter);
app.use("/api/menu", menuRouter);
app.use("/api/bookings", bookingsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});