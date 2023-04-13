const mongoose = require("mongoose");

//* created schema
const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

// Mongoose Model
const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
