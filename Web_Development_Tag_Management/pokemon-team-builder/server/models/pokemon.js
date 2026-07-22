const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type1: { type: String, required: true },
  type2: { type: String },
  level: { type: Number },
  ability: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  isFavorite: { type: Boolean }
});

// Mongoose will store this model in the pokemons collection.
module.exports = mongoose.model('Pokemon', pokemonSchema);
