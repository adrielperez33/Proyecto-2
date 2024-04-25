const validarDatos = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: "Debe completar todos los campos" });
    }
    

    if (isNaN(year) || year.toString().length !== 4) {
      return res.status(400).json({ error: "El año debe ser un número de 4 dígitos" });
    }
    next();
};

module.exports = { validarDatos };
