const express = require("express");
const db = require("./db/models");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

//shortcut p1
const noteBookRoutes = require("./routes/notebooks");
const noteRoutes = require("./routes/notes");
const app = express();

//middlewere
console.log("__dirname ", __dirname);
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/notebooks", noteBookRoutes);
app.use("/notes", noteRoutes);

app.use((req, res, next) => {
  console.log("Path dosn't exist");
  res.status(404).json({ message: "Path not found" });
});

//all errors (error handle middle ware)
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.json({ message: err.message || "internal server error" });
});
const jj = express();
app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

const run = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
