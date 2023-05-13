const express = require("express");
const fetchMovie = require("../controllers/fetchMovie.js");
const fetchMovie_route = express.Router();
fetchMovie_route.route("/fetchMovie").get(fetchMovie);
module.exports = fetchMovie_route;
