'use strict';
const jugadores = ["Messi","Ronaldo","Neymar","Isco","Alba"]
const nuevoJugador= ["Luis","Suarez",34,true,{ciudad:"Monte Video"},["Delantero","Extremo"]]
const consolas = ["Nintendo Switch","Playstation","Xbox","Steam Deck"]
const solicitudes = [23,56,37,12]





const jugadoresDos = ["Messi","Ronaldo","Neymar","Isco","Alba"]
const mascotas = ["Pitbull","Boxer","French","Pekines","Pastor Aleman"]

// spread operator
const nuevosJugadores = [...jugadoresDos,...mascotas]
console.log(nuevosJugadores);



'use strict';

const jugadoresTres = ["Messi","Ronaldo","Neymar","Isco","Alba"]
const consolasDos = ["Nintendo Switch","Playstation","Xbox","Steam Deck"]
const solicitudesDos = [23,56,37,12]

console.log("Número de elementos:", jugadoresTres.length);
console.log("Número de elementos:", consolasDos.length);
console.log("Número de elementos:", solicitudesDos.length);
