//! 1
const express = require("express");

//create app
const app = express();
const PORT = 3000;

//! 4
//import data
const pokemon = require("./models/pokemon");

//! 3
// default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Pokemon App!</h1>");
});

//* Create Different Route
//! 5
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

//! 2
// set listen for port
app.listen(PORT, function () {
  console.log(`Server runing on port ${PORT}`);
});
