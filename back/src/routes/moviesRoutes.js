const {Router} = require("express");
const {getPruebaControllers} = require("../controllers/pruebaControllers")

const routerMovies = Router();

routerMovies.get("/", getPruebaControllers)

module.exports = routerMovies;