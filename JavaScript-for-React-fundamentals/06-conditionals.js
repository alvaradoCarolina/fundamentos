"use strict";
const peliculas = [];
// utilizando el condicional clásico
if (peliculas.length === 0) {
    console.log("Agregar película");
}
// utilizando operador ternario
peliculas.length === 0 ? console.log("Agregar películas") : "";








"use strict";
const peliculasDos = ["Halo", "Shrek", "Advengers", "Pinocho"];
// utilizando el condicional clásico
if (peliculasDos.length != 0) {
    console.log("Proceder al alquiler de películas");
} else {
    console.log("Agregar películas");
}
// utilizando operador ternario
const accion = peliculasDos.length !== 0
    ? "Proceder al alquiler de películas"
    : "Agregar películas";
console.log(accion);







'use strict'
const peliculasTres = ["Halo", "Shrek", "Advengers", "Pinocho"];
// utilizando el condicional clásico
if (peliculasTres.length >=4)
{
    console.log("Descuento del 30%");
}
else if (peliculasTres.length >= 5)
{
    console.log("Descuento del 50%");
}
else if (peliculasTres.length >= 8)
{
    console.log("Descuento del 60%");
}
else {
    console.log("No existe descuento");
}
// utilizando operador ternario
peliculasTres.length >=4 ? console.log("Descuento del 30%") : peliculasTres.length >= 5 ? console.log("Descuento del 50%") :peliculasTres.length >= 8 ? console.log("Descuento del 60%") : console.log("No existe descuento")




'use strict'
const peliculasCuatro = ["Halo", "Shrek", "Advengers", "Pinocho"];
// utilizando el condicional clásico
if (peliculasCuatro.length >=4)
{
    console.log("Descuento del 40%");
}
else if (peliculasCuatro.length >= 5)
{
    console.log("Descuento del 60%");
}
else if (peliculasCuatro.length >= 8)
{
    console.log("Descuento del 80%");
}
else {
    console.log("No existe descuento");
}

// utilizando operador ternario
peliculasCuatro.length >=4 ? console.log("Descuento del 40%") : peliculasCuatro.length >= 5 ? console.log("Descuento del 60%") :peliculasCuatro.length >= 8 ? console.log("Descuento del 80%") : console.log("No existe descuento")





'use strict'
const actividadAlexa = 2
switch (actividadAlexa) {
    case 1:
        console.log("Prender el luces");
    break;
    case 2:
        console.log("Prender la radio");
    break;
    case 3:
        console.log("Cerrar cortinas");
    break;
    default:
        console.log(`No existe tarea para la actividad ${actividadAlexa}`);
    break;
}