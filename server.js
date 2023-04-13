//! 1
const express = require("express");

//create app
const app = express();
const PORT = 3000;

//! 4
//import data
const pokemon = require("./models/pokemon");

//! 5
//config views
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//? Middleware
//setting a middleware to run in our app
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
//parses the data fromt the request
app.use(express.urlencoded({ extended: false }));

//! 3
// default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Pokemon App!</h1>");
});

//* Create Different Route
//! 6
app.get("/pokemon", (req, res) => {
  //   res.send(pokemon);
  res.render("Index", { pokemon: pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  res.send(req.params.id);
});

//! 2
// set listen for port
app.listen(PORT, function () {
  console.log(`Server runing on port ${PORT}`);
});
