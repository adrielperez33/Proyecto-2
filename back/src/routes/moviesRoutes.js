const {Router} = require("express");
const {pruebaControllers} = require("../controllers/pruebaControllers")

const router = Router();

router.get("/", pruebaControllers)

module.exports = router;