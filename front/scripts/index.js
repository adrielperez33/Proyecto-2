
const pelis = document.getElementById("tarjetapelicula")

tempData.forEach((peliculas) => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("peliculas")
    
    const titulo = document.createElement("a")
    titulo.href = ("#")
    titulo.innerHTML = peliculas.title;
    
    const poster = document.createElement("img")
    poster.src = peliculas.poster;
    
    const director = document.createElement("p")
    director.innerHTML = peliculas.director;
    
    const duracion = document.createElement("p")
    duracion.innerHTML = peliculas.duration;
    
    const genero = document.createElement("p")
    genero.innerHTML = peliculas.genre;
    
    const rate = document.createElement("p")
    rate.innerHTML = peliculas.rate;
    
    const ano = document.createElement("p")
    ano.innerHTML = peliculas.year;
    
    
    contenedor.append(titulo,poster,director,duracion,genero,ano,rate)
    
    pelis.appendChild(contenedor);
    
})
