const {Pelicula, Repository} = require("./clases");
const crear = require("./repositorio");
const axios = require("axios");

const repositorio = new Repository();

const asincrono = async () => {
    try {
        const respuesta = await axios.get("https://students-api.up.railway.app/movies");
        const peliculas = respuesta.data;
        peliculas.forEach(pelicula => {
            console.log(pelicula);
            const { title, year, director, duration, genre, rate, poster } = pelicula;
            const actividad = new Pelicula(title, year, director, duration, genre, rate, poster);
            repositorio.agregarAlArreglo(actividad);
        });
        console.log(repositorio.mostrarArreglo());
        mostrarPeliculas(repositorio.mostrarArreglo());
    } catch (error) {
        alert("Hay un error inesperado");
        console.log(error.message);
    }
};

function mostrarPeliculas(peliculas) {
        const tarjetaPelicula = document.getElementById("tarjetapelicula");
    
    peliculas.forEach(pelicula => {
        const peliculaElemento = crear(pelicula);
        tarjetaPelicula.appendChild(peliculaElemento);
    });
}
asincrono();






// A partir de aca abajo estan codigos que utilice en algun momento pero reemplace por las consigas del mismo proyecto con el paso de las clases




// Esta fue la funcion que llame al principio antes de comenzar a usar axios para el asyncronismo:

// function bucle() {
//     $.get("https://students-api.up.railway.app/movies", (info) => {
    //         const peliculas = info.map((pelicula) => {
        //             return creador(pelicula);
        //         });
        //         mostrarPeliculas(peliculas);
        //     });
        // }
        
// En esta linea llamaba a mi funcion buble antes de cambiar por la funcion asincrono con el async/await

// bucle();