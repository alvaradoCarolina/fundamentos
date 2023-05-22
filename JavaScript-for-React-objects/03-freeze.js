'use strict';
const cliente = {
    nombre:"Carolina",
    apellido:"Alvarado",
    edad:25,
    direccion:{
        ciudad:"Quito",
        telefono:"0984609598",
        calle:"La vicentina"
    }
}

Object.freeze(cliente)
console.log(Object.isFrozen(cliente));
cliente.image ="t.ly/Rhgs"






'use strict';
const clienteDos = {
    nombre:"Carolina",
    apellido:"Alvarado",
    edad:25,
    direccion:{
        ciudad:"Quito",
        telefono:"0984609598",
        calle:"La vicentina"
    }
}

// con seal no se puede agregar o eliminar propiedades, pero 
// si se puede modificar las propiedades
Object.seal(clienteDos)
console.log(Object.isSealed(clienteDos))
clienteDos.edad= 35
console.log(clienteDos);


