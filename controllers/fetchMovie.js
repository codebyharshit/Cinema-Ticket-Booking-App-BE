const Movie = require("../models/addMovie");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.json({ movies });

    const result = {
      title: movies.title,
      poster: movies.poster,
      director: movies.director,
      actor: movies.actor,
      genre: movies.genre,
      release_date: movies.release_date,
      running_time: movies.running_time,
      trailer: movies.trailer,
    };
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getMovies;
