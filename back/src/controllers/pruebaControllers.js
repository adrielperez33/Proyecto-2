const moviesServices = require("../services/moviesServices");

module.exports = {
    getPruebaControllers: async (req, res) => {
        try {
            const arreglo = await moviesServices.getPeliculas();
            res.status(200).send(arreglo);
        } catch (error) {
            res.status(500).send(`Error inesperado: ${error.message}`);
        }
    },

    postPeliculaController: async (req, res) => {
        try {
            const datosPelicula = req.body;
            const nuevaPelicula = await moviesServices.postPelicula(datosPelicula);
            res.status(201).json({ mensaje: 'Película creada correctamente', pelicula: nuevaPelicula });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};