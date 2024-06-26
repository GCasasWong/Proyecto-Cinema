const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateMovieData = require("../middleware/validateMovieData");
const moviesRouter = Router();

moviesRouter.post("/", validateMovieData, moviesController.createMovies);
moviesRouter.get("/", moviesController.getMovies);
// moviesRouter.post("/", validateMovieData, moviesController.createMovies);

module.exports = moviesRouter;