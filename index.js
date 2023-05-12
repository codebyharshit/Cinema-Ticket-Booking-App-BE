const PORT = process.env.PORT || 5000;

const db = require("./db/database.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const movieInfo_route = require("./routes/movieInfoRoute.js");
const addMovie_route = require("./routes/addMovieRoute.js");
const bookTickets_route = require("./routes/bookTickets.js");
const downloadTickets_route = require("./routes/downloadTickets.js");

const app = express();
const port = process.env.API_PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());
app.use("/", movieInfo_route);
app.use("/", addMovie_route);
app.use("/", bookTickets_route);
app.use("/", downloadTickets_route);

// server listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
