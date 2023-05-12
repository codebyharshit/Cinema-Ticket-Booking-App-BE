const Movie = require("../models/addMovie");

const getMovies = async (req, res) => {
  try {
    const { movie } = req.query;
    if (!movie) {
      res.send("All inputs required");
    }

    const filter = { title: movie };
    const movieInfo = await Movie.findOne(filter);

    if (movieInfo) {
      const result = {
        title: movieInfo.title,
        poster: movieInfo.poster,
        director: movieInfo.director,
        actor: movieInfo.actor,
        genre: movieInfo.genre,
        release_date: movieInfo.release_date,
        running_time: movieInfo.running_time,
        trailer: movieInfo.trailer,
        ticketsAvailable: movieInfo.ticketsAvailable,
      };
      res.json({ result });
    } else {
      const result = {
        title: 0,
        poster: 0,
        director: 0,
        actor: 0,
        genre: 0,
        release_date: 0,
        running_time: 0,
        trailer: 0,
        ticketsAvailable: 0,
      };
      res.json({ result });
    }
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getMovies;
