// const express = require("express");
// const getMoviesInfo  = require ("../controllers/getMoviesInfo.js");
// const movieInfo_route = express.Router();
// movieInfo_route.route("/getInfo").get(getMoviesInfo);
// module.exports = movieInfo_route;

const express = require("express");
const addNewMovie = require("../controllers/addNewMovie.js");
const addMovie_route = express.Router();
addMovie_route.route("/addMovie").post(addNewMovie);
module.exports = addMovie_route;
