require("dotenv").config();

const express = require("express");

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

port = process.env.PORT;

// listen for requests
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
