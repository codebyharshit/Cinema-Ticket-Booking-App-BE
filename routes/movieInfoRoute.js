const express = require("express");
const getMoviesInfo  = require ("../controllers/getMoviesInfo.js");
const movieInfo_route = express.Router();
movieInfo_route.route("/getMovieInfo").get(getMoviesInfo);
module.exports = movieInfo_route;
