const { Router } = require("express");
const { getPruebaControllers, postPeliculaController } = require("../controllers/pruebaControllers");
const { validarDatos } = require("../middlewares/classMovies");

const routerMovies = Router();

routerMovies.get("/", getPruebaControllers);
routerMovies.post('/',validarDatos, postPeliculaController);

module.exports = routerMovies;
