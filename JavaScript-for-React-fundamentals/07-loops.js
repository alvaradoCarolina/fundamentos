'use strict'
const turnoUno = 5
for (let i = turnoUno; i >= 0; i--) {
    i <=0 ? console.log("Ingreso otorgado"):console.log(i);
}






'use strict'
let turnoDos = 5
while (turnoDos >= 0)
{
    turnoDos<=0 ? console.log("Ingreso otorgado"):console.log(turnoDos)
    turnoDos--
}





'use strict'
let turnoTres = 5
do {
    turnoTres<=0 ? console.log("Ingreso otorgado"):console.log(turnoTres)
    turnoTres--
} while (turnoTres >= 0);







'use strict'
const hobbies = ['Cantar','Bailar','Nadar','Viajar','Jugar']
const usuario ={
    nombre:"Carolina",
    apellido:"Alvarado",
}

// uso del forEach 
hobbies.forEach((t,i)=> console.log(`${i} - ${t}`))

// uso del for of -> usado para arreglos
for (const t of hobbies) {
    console.log(`${t}`)
}


// uso del for in -> usado para objetos
for (const clave in usuario) {
    console.log(`${usuario[clave]}`)
}
for (const [clave,valor] of Object.entries(usuario)) {
    console.log(`${clave} - ${valor}`)
}


// uso del map -> retorna un nuevo arreglo
const nuevosHobbies = hobbies.map((t)=> t)
console.log(nuevosHobbies);

