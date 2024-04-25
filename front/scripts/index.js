const axios = require("axios");
const { Pelicula, Repository } = require("./clases");
const crear = require("./repositorio");

const repositorio = new Repository();

async function asincrono() {
    try {
        const respuesta = await axios.get("http://localhost:3000/movie");
        const peliculas = respuesta.data;
        peliculas.forEach(pelicula => {
            const { title, year, director, duration, genre, rate, poster } = pelicula;
            const actividad = new Pelicula(title, year, director, duration, genre, rate, poster);
            repositorio.agregarAlArreglo(actividad);
        });
        mostrarPeliculas(repositorio.mostrarArreglo());
    } catch (error) {
        alert("Hay un error inesperado");
    }
}

function mostrarPeliculas(peliculas) {
    const tarjetaPelicula = document.getElementById("tarjetapelicula");
    const elementosPelicula = peliculas.map(pelicula => {
        return crear(pelicula);
    });
    elementosPelicula.forEach(elemento => {
        tarjetaPelicula.appendChild(elemento);
    });
}

function manejarEventListeners() {
    const btnLimpiar = document.getElementById('limpiarBtn');   
    btnLimpiar.addEventListener('click', () => {
        resetForm();
    });
    
    const btnEnviar = document.getElementById("enviarBtn");
    btnEnviar.addEventListener('click', (event) => { 
        event.preventDefault(); 
        manejarEnvioFormulario(); 
    });
}

function resetForm() {
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.value = '';
    });
}


async function manejarEnvioFormulario() {
    const formData = new FormData(document.getElementById('form'));
    
    const genreString = formData.get('genre');
    
    const genreArray = genreString.split(',');
    const newGenreArray = genreArray.map(genre => genre.trim());

    
    const data = {
        title: formData.get('title'),
        year: formData.get('year'),
        director: formData.get('director'),
        duration: formData.get('duration'),
        genre: newGenreArray,
        rate: formData.get('rate'),
        poster: formData.get('poster')
    };
    
    try {
        await axios.post('http://localhost:3000/movie', data);
        alert('¡Datos enviados correctamente!');
        console.log('¡Datos enviados correctamente a la base de datos!');
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                alert(error.response.data.error);
            } else {
                alert('Ocurrió un error al procesar la solicitud');
            }
        } else {
            alert('Ocurrió un error de red');
        }
        console.error('Error al enviar los datos a la base de datos:', error);
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const isFormPage = window.location.pathname.includes('formulario.html');
    if (isFormPage) {
        manejarEventListeners();
    } else {
        asincrono();
    }
});

    
    
    
    
    
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