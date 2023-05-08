// const MovieInfo = require("../models/movieModel.js");

// const getMoviesInfo = async (req, res) => {
//   try {
//     const { movie } = req.query;
//     if (!movie) {
//       res.send("All inputs required");
//     }

//     const filter = { title: movie };
//     const movieInfo = await MovieInfo.find();
//     console.log(movieInfo);

//     if (movieInfo) {
//       const result = {
//         title: movieInfo.title,
//         poster: movieInfo.poster,
//         director: movieInfo.director,
//         actor: movieInfo.actor,
//         genre: movieInfo.genre,
//         release_date: movieInfo.release_date,
//         running_time: movieInfo.running_time,
//         trailer: movieInfo.trailer,
//       };
//       res.json({ result });
//     } else {
//       const result = {
//         title: 0,
//         poster: 0,
//         director: 0,
//         actor: 0,
//         genre: 0,
//         release_date: 0,
//         running_time: 0,
//         trailer: 0,
//       };
//       res.json({ result });
//     }

//     return;
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// module.exports = getMoviesInfo;

// const movies = await Movie.find();
// console.log(movies);
// res.json({ movies });

// const result = {
//   title: movies.title,
//   poster: movies.poster,
//   director: movies.director,
//   actor: movies.actor,
//   genre: movies.genre,
//   release_date: movies.release_date,
//   running_time: movies.running_time,
//   trailer: movies.trailer,
// };
// res.json({ result });

const Movie = require("../models/addMovie");

const getMovies = async (req, res) => {
  try {
    const { movie } = req.query;
    if (!movie) {
      res.send("All inputs required");
    }

    const filter = { title: movie };
    const movieInfo = await Movie.findOne(filter);
    console.log(movieInfo);

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
