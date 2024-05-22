require("dotenv").config();
import express from "express";

// App
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Database


// Routes
const userRouter = require("./routes/users");
app.use("/users", userRouter);

const menuRouter = require("./routes/menu");
app.use("/menu", menuRouter);

const bookingRouter = require("./routes/bookings");
app.use("/bookings", bookingRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});