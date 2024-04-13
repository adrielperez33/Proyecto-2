

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

function bucle() {
    $.get("https://students-api.up.railway.app/movies", (info) => {
        const peliculas = info.map((pelicula) => {
            return creador(pelicula);
        });
        mostrarPeliculas(peliculas);
    });
}

function mostrarPeliculas(peliculas) {
    const pelis = document.getElementById("tarjetapelicula");
    
    peliculas.forEach((pelicula) => {
        pelis.appendChild(pelicula);
    });
}

function bucle() {
    $.get("https://students-api.up.railway.app/movies", (info) => {
        const peliculas = info.map((pelicula) => {
            return creador(pelicula);
        });
        mostrarPeliculas(peliculas);
    });
}

function mostrarPeliculas(peliculas) {
    const pelis = document.querySelector("#tarjetapelicula .row");
  
    peliculas.forEach((pelicula) => {
      const columna = document.createElement("div");
      columna.classList.add("col-md-4"); 
      columna.appendChild(pelicula);
      pelis.appendChild(columna);
    });
  }
  

// function creador(parametros) {
//     const { title, year, director, duration, genre, rate, poster } = parametros;

//     const contenedor = document.createElement("div");
//     contenedor.classList.add("card");
//     contenedor.style.width = "18rem";

//     const poste = document.createElement("img");
//     poste.classList.add("card-img-top");
//     poste.src = poster;
//     poste.alt = "Poster";

//     const cuerpo = document.createElement("div");
//     cuerpo.classList.add("card-body");

//     const titulo = document.createElement("a");
//     titulo.classList.add("card-title");
//     titulo.href = "#";
//     titulo.innerHTML = title;

//     const directorr = document.createElement("p");
//     directorr.classList.add("card-text");
//     directorr.innerHTML = `director: ${director}`;

//     const duracion = document.createElement("p");
//     duracion.classList.add("card-text");
//     duracion.innerHTML = `duracion: ${duration}`;

//     const genero = document.createElement("p");
//     genero.classList.add("card-text");
//     genero.innerHTML = `generos: ${genre.join(", ")}`;

//     const rates = document.createElement("p");
//     rates.classList.add("card-text");
//     rates.innerHTML = `rate: ${rate}`;

//     const ano = document.createElement("p");
//     ano.classList.add("card-text");
//     ano.innerHTML = `año: ${year}`;

//     cuerpo.append(titulo, directorr, duracion, genero, rates, ano);
    
//     contenedor.append(poste, cuerpo);

//     return contenedor;
// }


const creador = require("./creador")

bucle();
