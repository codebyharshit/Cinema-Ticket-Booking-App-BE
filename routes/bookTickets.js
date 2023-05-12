// Route to book tickets and handle put request to update in database

const express = require("express");
const bookTickets = require("../controllers/bookTickets.js");
const bookTIckets_route = express.Router();
bookTIckets_route.route("/bookTickets").put(bookTickets);
module.exports = bookTIckets_route;
