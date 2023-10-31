require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workout.js");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to database
db = process.env.DATABASE_URL;
mongoose
  .connect(db)
  .then(() => {
    console.log("DB connected successful");
  })
  .catch((err) => {
    console.log(err);
  });

// listen for requests
port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
