const Movie = require("../models/addMovie");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    // console.log(movies);
    
    const result = movies.map((movie) => ({
      title: movie.title,
      poster: movie.poster,
      director: movie.director,
      actor: movie.actor,
      genre: movie.genre,
      release_date: movie.release_date,
      running_time: movie.running_time,
      trailer: movie.trailer,
      ticketsAvailable: movie.ticketsAvailable,
    }));
    
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getMovies;