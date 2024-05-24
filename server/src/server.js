import dotenv from "dotenv";
import express from "express";

import sequelize, { connect } from "./database/database";

import usersRouter from "./routes/users";
import bookingsRouter from "./routes/bookings";
import menuRouter from "./routes/menu";

dotenv.config();

// Database
connect();

// App
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/users", usersRouter);
app.use("/menu", menuRouter);
app.use("/bookings", bookingsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});