const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieInfoSchema = new Schema({
  title: { type: String },
  poster: { type: String },
  director: { type: String },
  actor: { type: String },
  genre: { type: String },
  release_date: { type: Date },
  running_time: { type: String },
  trailer: { type: String },
});

const MovieInfo = mongoose.model("MovieInfo", movieInfoSchema);

module.exports = MovieInfo;
