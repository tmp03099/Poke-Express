//! 1
const express = require("express");

//create app
const app = express();
const PORT = 3000;

//! 3
// default route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//! 2
// set listen for port
app.listen(PORT, function () {
  console.log(`Server runing on port ${PORT}`);
});
