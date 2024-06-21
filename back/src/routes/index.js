const { Router } = require("express");
const moviesRouter = require("./movies")

const routerM = Router();

routerM.use("/movies",moviesRouter);

module.exports = routerM;