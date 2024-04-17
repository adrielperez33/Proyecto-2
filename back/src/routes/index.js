const {Router} = require("express");
const movieRoutes = require("./moviesRoutes")

const router = Router();

router.use("/movie", movieRoutes)

module.exports = router