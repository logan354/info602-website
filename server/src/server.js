require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// JSON
app.use(express.json());

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