const Movie = require("../models/addMovie");

module.exports = async (req, res) => {
  try {
    const {
      title,
      poster,
      director,
      actor,
      genre,
      releaseDate,
      runningTime,
      trailer,
      ticketsAvailable,
    } = req.body;

    const newMovie = new Movie({
      title,
      poster,
      director,
      actor,
      genre,
      releaseDate,
      runningTime,
      trailer,
      ticketsAvailable,
    });

    // Save the new movie to the database
    await newMovie.save();

    res
      .status(201)
      .json({ message: "Movie created successfully", movie: newMovie });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
