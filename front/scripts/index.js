

class Activity{
    constructor(title, year, director, duration, genre, rate, poster){
     this.title = title
     this.year = year
     this.director = director
     this.duration = duration
     this.genre = genre
     this.rate = rate
     this.poster = poster
    }
}

class Repository{
    constructor(){
        this.array = []
    }

    agregarAlArreglo(parametro){
        this.array.push(parametro)
        
    }

    mostrarArreglo(){
        return this.array
    }
}

const k = new Repository;

function creador(parametros) {
    
    console.log(parametros);
    const {title, year, director, duration, genre, rate, poster} = parametros
    
    
    const contenedor = document.createElement("div");
    contenedor.classList.add("peliculas")
    
    const titulo = document.createElement("a")
    titulo.href = ("#")
    titulo.innerHTML = title;
    
    const poste = document.createElement("img")
    poste.src = poster;
    
    const directorr = document.createElement("p")
    directorr.innerHTML = director;
    
    const duracion = document.createElement("p")
    duracion.innerHTML = duration;
    
    const genero = document.createElement("p")
    genero.innerHTML = genre;
    
    const rates = document.createElement("p")
    rates.innerHTML = rate;
    
    const ano = document.createElement("p")
    ano.innerHTML = year;
    
    
    contenedor.append(titulo,ano,directorr,duracion,genero,rates, poste)
    
    k.agregarAlArreglo(contenedor);
    
}


function bucle() {

    $.get("https://students-api.up.railway.app/movies", (info) => {
        info.forEach((pelicula) => {
            creador(pelicula);
        });
        mostrarPeliculas();
    });
}


function mostrarPeliculas() {
    const peliculas = k.mostrarArreglo();
    const pelis = document.getElementById("tarjetapelicula");
    
    // pelis.innerHTML = "";
    
    peliculas.forEach((pelicula) => {
        pelis.appendChild(pelicula);
    });
}

bucle();
