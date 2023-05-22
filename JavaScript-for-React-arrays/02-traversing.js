const jugadores = ["Messi","Ronaldo","Neymar","Isco","Alba"]

// primera forma de iterar sobre los elementos de un arreglo 
for (let i=0 ; i<jugadores.length ; i++){
    console.log(jugadores[i]);
}

// segunda forma de iterar sobre los elementos de un arreglo 
jugadores.forEach((e,i)=>console.log(`${i} - ${e}`))


// tercera forma de iterar sobre los elementos de un arreglo 
const nuevoJugador = jugadores.map((e)=> `Hola ${e}`)
console.log(jugadores);
console.log(nuevoJugador);
// En conclusión (map) no altera el arreglo original


const cliente =[
    {
        name:"Carolina",
        lastName:"Alvarado",
        age:25
    },
    {
        name:"Steven",
        lastName:"Mosquera",
        age:24
    }
]

cliente.forEach(u=>console.log(`${u.name} - ${u.age}`))