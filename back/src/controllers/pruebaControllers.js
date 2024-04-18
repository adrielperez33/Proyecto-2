const { json } = require("express")
const moviesServices = require("../services/moviesServices")

module.exports = {
    getPruebaControllers :async (req, res) => {
        try {
            const arreglo = await moviesServices.peliculas()
            res.status(200).send(arreglo)
        } catch (error) {
            Error: json("error inesperado")
        }
    } 
}