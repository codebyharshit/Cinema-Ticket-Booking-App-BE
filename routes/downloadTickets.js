// Route to download tickets what user has booked

const express = require("express");
const downloadTickets = require("../controllers/downloadTickets.js");
const downloadTickets_route = express.Router();
downloadTickets_route.route("/downloadTickets").get(downloadTickets);
module.exports = downloadTickets_route;
