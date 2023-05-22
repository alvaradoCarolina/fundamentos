'use strict';
let nombreJuegoUno = "Super Mario Bros"
let tipoJuego = 'Aventura'
console.log(nombreJuego,tipoJuego);




'use strict';
let nombreJuegoDos = "Super Mario Party"
console.log("Número de letras:",nombreJuegoDos.length);
console.log("Encotrar alguna palabra:",nombreJuegoDos.includes("Kart"));
console.log("Convertir a mayúsculas:",nombreJuegoDos.toUpperCase());
console.log("Convertir a minusculas:",nombreJuegoDos.toLowerCase());
console.log("Quitar espacios adelante y atrás:",nombreJuegoDos.trim());
console.log("Reemplazar una palabra:",nombreJuegoDos.replace('Party','Party Superstars'));
console.log("Cortar un texto:",nombreJuegoDos.slice(1,6));
console.log("Cortar un texto:",nombreJuegoDos.substring(1,6));
console.log("Cortar un texto:",nombreJuegoDos.charAt(1));
console.log("Repetir un texto:",nombreJuegoDos.repeat(2));
console.log("Dividir un texto:",nombreJuegoDos.split(" "));



'use strict';
const name = "Steven"
const lastName= "Mosquera"
const city ="Quito"
const age = 24
const active = true
console.log(name+"-"+lastName+"-"+city)
console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);

