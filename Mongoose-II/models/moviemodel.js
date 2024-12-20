const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  description: { type: String },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
