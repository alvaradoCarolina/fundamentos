'use strict';

const clienteUno = ["Carolina","Alvarado",25,true,{telefono:"0984609598"},["efectivo","tarjeta"]]

const [nombre,apellido,edad,estado,telefono,metodoPago] = clienteUno

console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(estado)
console.log(telefono)
console.log(metodoPago)

// Saltar el valor en un arreglo
const [tomate, , zanahoria] = ['🍅', '🍄', '🥕']
console.log(tomate)
console.log(zanahoria)

// Desestructurando un arreglo anidado
const frutas = ['🍈', '🥕', '🍌', '🍉', ['🍅', '🍄', '🍍']]
const market = frutas[4]
const pineapple = market[2]
console.log(pineapple);