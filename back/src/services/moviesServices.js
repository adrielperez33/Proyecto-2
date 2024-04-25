const Pelis = require("../models/Movie");

module.exports = {
    getPeliculas: async () => {
        const pelis = await Pelis.find();
        return pelis;
    }, 

    postPelicula: async  (datosPelicula) =>{
        try {
            const newPelicula = await Pelis.create(datosPelicula);
            return newPelicula;
        } catch (error) {
            throw new Error('Error al crear la película en la base de datos');
        }
    }
};