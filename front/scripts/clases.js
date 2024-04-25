class Pelicula {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title
        this.year = year
        this.director = director
        this.duration = duration
        this.genre = genre
        this.rate = rate
        this.poster = poster
    }
}

class Repository {
    constructor() {
        this.array = []
    }

    agregarAlArreglo(parametro) {
        this.array.push(parametro)
    }

    mostrarArreglo() {
        return this.array
    }
}

module.exports = {
    Pelicula,
    Repository
}
