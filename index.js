// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello, World!" });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

const db = require("./db/database.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const movieInfo_route = require("./routes/movieInfoRoute.js");
const addMovie_route = require("./routes/addMovieRoute.js");
const fetchMovie_route = require("./routes/fetchMovieRoute.js");

// import dotenv from "dotenv/config";
// import { db } from "./db/database.js";
// import express from "express";
// import { events } from "./event.js";
// import cors from "cors";
// import { supply_route } from "./routes/supplyRoute.js";
// import { withdraw_route } from "./routes/withdrawRoute.js";
// import { txStatus_route } from "./routes/transactionStatusRoute.js";
// import { assetInfo_route } from "./routes/assetInfoRoute.js";
// import { allAssetsInfo_route } from "./routes/allAssetsInfoRoute.js";
// import { userBalance_route } from "./routes/userBalanceRoute.js";
// import { approve_route } from "./routes/approveRoute.js";
// import { allowance_route } from "./routes/allowanceRoute.js";
// import { APR_route } from "./routes/supply&BorrowAPRroute.js";
// import { price_route } from "./routes/priceFeedRoute.js";
// import { supplyInfo_route } from "./routes/userSupplyInfoRoute.js";
// import { withdrawableAmount_route } from "./routes/withdrawableAmountRoute.js";
// import { borrowableAmount_route } from "./routes/borrowableAmountRoute.js";
// import { borrowBalance_route } from "./routes/borrowBalanceRoute.js";
// import { decimals_route } from "./routes/decimalsRoute.js";
// import { balanceOf_route } from "./routes/balanceOfRoute.js";
// import { movieInfo_route } from "./routes/movieInfoRoute.js";

const app = express();
const port = process.env.API_PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());
app.use("/", movieInfo_route);
app.use("/", addMovie_route);
app.use("/", fetchMovie_route);
// app.use("/", supply_route);
// app.use("/", withdraw_route);
// app.use("/", txStatus_route);
// app.use("/", assetInfo_route);
// app.use("/", allAssetsInfo_route);
// app.use("/", userBalance_route);
// app.use("/", approve_route);
// app.use("/", allowance_route);
// app.use("/", APR_route);
// app.use("/", price_route);
// app.use("/", withdrawableAmount_route);
// app.use("/", borrowableAmount_route);
// app.use("/", borrowBalance_route);
// app.use("/", decimals_route);
// app.use("/", balanceOf_route);

// server listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// events();
