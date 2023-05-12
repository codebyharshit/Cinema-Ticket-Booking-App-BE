// Model to add the movies to the database

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  runningTime: {
    type: Number,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  ticketsAvailable: {
    type: Number,
    required: true,
  },

});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
