const { json } = require("express")
const moviesServices = require("../services/moviesServices")

module.exports = {
    pruebaControllers :async (req, res) => {
        try {
            const arreglo = await moviesServices.peliculas()
            res.status(200).json(arreglo)
        } catch (error) {
            Error: json("error inesperado")
        }
    } 
}