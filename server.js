require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

//create app
const app = express();
const PORT = 3000;

//import data
const pokemon = require("./models/pokemon");
const Pokemon = require("./models/Poke");

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

// default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Pokemon App!</h1>");
});

//* Index Route return all list of poke
app.get("/pokemon", (req, res) => {
  Pokemon.find()
    .then((pokemon) => {
      console.log(pokemon);
      res.render("pokemon/Index", { pokemon: pokemon });
    })
    .catch((error) => {
      console.log(error);
    });
});

// * New route return a form
app.get("/pokemon/new", (req, res) => {
  res.render("pokemon/New");
});

// * Show Route return each POKE
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPoke) => {
    res.render("pokemon/Show", { poke: foundPoke });
  });
});

// * Post method: create a single Poke
app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body)
    .then((pokemon) => {
      console.log(pokemon);
      res.redirect("/pokemon");
    })
    .catch((error) => {
      console.error(error);
    });
});

// set listen for port
app.listen(PORT, function () {
  console.log(`Server runing on port ${PORT}`);

  mongoose.set("strictQuery", true);
  // connect to mongodbB
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB!");
  });
});
