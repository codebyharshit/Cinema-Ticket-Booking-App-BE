// Route to handle the post request to add a movie in database

const express = require("express");
const addNewMovie = require("../controllers/addNewMovie.js");
const addMovie_route = express.Router();
addMovie_route.route("/addMovie").post(addNewMovie);
module.exports = addMovie_route;
