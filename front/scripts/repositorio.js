function creador(pelicula) {
    const { title, year, director, duration, genre, rate, poster } = pelicula;
    
    const contenedorExterno = document.createElement("div");
    contenedorExterno.classList.add("peliculas"); 
    
    const contenedorInterno = document.createElement("div");
    contenedorInterno.classList.add("pelicula-inner"); 
    
    const poste = document.createElement("img");
    poste.classList.add("card-img-top");
    poste.src = poster;
    poste.alt = "Poster";
    
    const cuerpo = document.createElement("div");
    cuerpo.classList.add("card-body");
    
    const titulo = document.createElement("a");
    titulo.classList.add("card-title");
    titulo.href = "#";
    titulo.innerHTML = title;
    
    const directorr = document.createElement("p");
    directorr.classList.add("card-text");
    directorr.innerHTML = `Director: ${director}`;
    
    const duracion = document.createElement("p");
    duracion.classList.add("card-text");
    duracion.innerHTML = `Duracion: ${duration}`;
    
    const genero = document.createElement("p");
    genero.classList.add("card-text");
    genero.innerHTML = `Genero: ${genre.join(", ")}`;
    
    const rates = document.createElement("p");
    rates.classList.add("card-text");
    rates.innerHTML = `rate: ${rate}`;
    
    const ano = document.createElement("p");
    ano.classList.add("card-text");
    ano.innerHTML = `Año: ${year}`;
    
    cuerpo.append(titulo, directorr, duracion, genero, rates, ano);
    
    contenedorInterno.append(poste, cuerpo);
    
    contenedorExterno.appendChild(contenedorInterno);
    
    return contenedorExterno;
}



module.exports = creador;