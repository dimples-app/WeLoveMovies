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


module.exports = app;
