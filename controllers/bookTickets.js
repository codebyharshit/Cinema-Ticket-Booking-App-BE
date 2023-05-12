const Movie = require("../models/addMovie.js");

module.exports = async (req, res) => {
  const { movie } = req.query;
  const filter = { title: movie };
  const movieInfo = await Movie.findOne(filter);
  const updateData = req.body;
  try {
    if (!movie) {
      res.send("All inputs required");
    }
    if (movieInfo) {
      const update = {
        $set: {
          title: updateData.movieInfo.title,
          poster: updateData.movieInfo.poster,
          director: updateData.movieInfo.director,
          actor: updateData.movieInfo.actor,
          genre: updateData.movieInfo.genre,
          release_date: updateData.movieInfo.release_date,
          running_time: updateData.movieInfo.running_time,
          trailer: updateData.movieInfo.trailer,
          ticketsAvailable: updateData.movieInfo.ticketsAvailable,
        },
      };
      console.log("update", update);
      const movieDetails = await Movie.updateOne(filter, update);
      res.json(movieDetails);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating movie." });
  }
};
