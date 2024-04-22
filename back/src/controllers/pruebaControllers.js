const moviesServices = require("../services/moviesServices");

module.exports = {
    getPruebaControllers: async (req, res) => {
        try {
            const arreglo = await moviesServices.getPeliculas();
            res.status(200).send(arreglo);
        } catch (error) {
            res.status(500).send(`Error inesperado: ${error.message}`);
        }
    } 
};
