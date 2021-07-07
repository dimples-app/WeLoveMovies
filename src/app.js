if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// Require Router 
const moviesRouter = require("./movies/movies.router");
const theatersRouters = require("./theaters/theaters.router")
const reviewsRouter = require("./reviews/reviews.router")

//require error
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler")

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
