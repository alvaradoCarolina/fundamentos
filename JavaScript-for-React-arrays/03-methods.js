'use strict';

const cliente = ["Carolina","Alvarado",25,true,{telefono:"0984609598"}]
const tipoPago = ["efectivo","tarjeta"]
const codigoCliente ="calvarado"

// Agrega al final del arreglo
cliente.push(tipoPago)
// Agregar al inicio del arreglo
cliente.unshift(codigoCliente)
console.log(cliente);



'use strict';

const clienteDos = ["Carolina","Alvarado",25,true,{telefono:"0984609598"}]

// Elimina el elemento del final del arreglo
clienteDos.pop(clienteDos)
// Elimina el elemento del inicio del arreglo
clienteDos.shift(clienteDos)
console.log(clienteDos);





const jugadores = ["Messi","Ronaldo","Neymar","Isco","Alba"]

// método find
const jugadorN1 = jugadores.find((e)=>e==="Messi")
console.log(jugadorN1);

const jugadorN2 = jugadores.find((e)=>e==="Messi1")
console.log(jugadorN2);







'use strict';

const jugadoresDos = ["Messi","Ronaldo","Neymar","Isco","Alba"]

// método findIndex
const buscarIndex = jugadoresDos.findIndex((f)=>f==="Isco")
console.log(buscarIndex)








const jugadoresTres = ["Messi","Ronaldo","Neymar","Isco","Alba"]

// método filter
const nuevoJugadorUno = jugadoresTres.filter((e)=>e.startsWith('A'))
const nuevoJugadorDos = jugadoresTres.filter((e)=>e!='Alba')
console.log(nuevoJugadorUno);
console.log(nuevoJugadorDos);





const jugadoresCuatro = ["Messi","Ronaldo","Neymar","Isco","Alba"]
const mascotas = ["Pitbull","Boxer","French","Pekines","Pastor Aleman"]

// método concat
const nuevosJugadores = jugadoresCuatro.concat(mascotas)
console.log(nuevosJugadores);





'use strict';

// Funciona únicamente con arreglos de un solo valor
const clienteTres = ["Carolina","Alvarado",25,true,{telefono:"0984609598"}]

console.log(clienteTres.includes(50))
console.log(clienteTres.includes(['Credito']))









'use strict';

// Funciona para arreglos de un solo valor y arreglo de objetos
const jugadoresCinco = ["Messi","Ronaldo","Neymar","Isco","Alba"]
const clienteCuatro =[
    {
        name:"Erika",
        lastName:"Morales",
        age:34
    },
    {
        name:"Steven",
        lastName:"Guerra",
        age:30
    }
]
const existeCliente = cliente.some(u=>u.name==="Steven")
console.log(existeCliente)
const verificaJugador = jugadoresCinco.some(f=>f==="Byron")
console.log(verificaJugador)






"use strict";

const peliculasUno = [
    {   name: "Shrek",
        qty: 1,
        time: 180
    },
    {   name: "Advengers",
        qty: 1,
        time: 132,
    },
    {
        name: "Cenicienta",
        qty: 1,
        time: 120,
    }
]
// Todos los elementos deben cumplir la condición
const result = peliculasUno.every(e=>e.time>=180)
console.log(result);
//  Al menos un elemento debe cumplir la condición
const response = peliculasUno.some(e=>e.time>=180)
console.log(response);





'use strict';

const clienteCinco = ["Carolina","Alvarado",25,true,{telefono:"0984609598"}]
console.log(clienteCinco.reverse())





'use strict';

const clienteSeis = ["Carolina","Alvarado",25,true,{telefono:"0984609598"}]
console.log(clienteSeis.sort())






"use strict";

const niños = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];

const peliculasDos = [
    {   name: "Shrek",
        qty: 1,
        time: 180
    },
    {   name: "Advengers",
        qty: 1,
        time: 132,
    },
    {
        name: "Cenicienta",
        qty: 2,
        time: 120,
    }
]


const resultado = niños.reduce((pre, act) => pre + act.age, 0);
console.log("Edad de los estudiantes: ",resultado);

const totalPeliculas = peliculasDos.reduce((pre,act)=>pre+act.qty,0)
console.log("Total de películas: ",totalPeliculas);

const totalTiempo = peliculasDos.reduce((pre,act)=>pre+act.time,0)
console.log("Total tiempo películas: ",totalTiempo+(totalTiempo/60))