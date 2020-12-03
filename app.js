const express = require("express");

const app = express();
app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});
app.listen(8001, () => {
  console.log("The application is running on localhost:8001");
});
