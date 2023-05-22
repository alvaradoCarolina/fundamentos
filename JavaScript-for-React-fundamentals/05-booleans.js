"use strict";
// Es importante reconocer el tipo de valor asignado
const dinero = "100";
const costoTotal = 100;
console.log(costoTotal, dinero);
console.log(typeof costoTotal, typeof dinero);
console.log("suma:", costoTotal + 50);
console.log("resta:", costoTotal - 50);
console.log("multiplicación:", costoTotal * 50);
console.log("división:", costoTotal / 50);
console.log("módulo:", costoTotal % 50);
// Importante el manejo de operadores de incremento y decremento
let costoTotalActual = 50;
console.log(++costoTotalActual);
console.log(costoTotalActual++);
let dineroActual = 50;
console.log(--dineroActual);
console.log(dineroActual--);

"use strict";
// operadores de asignación
let salarioUsuario = 500;
let salarioBasico = 1000;
let estadoCuenta;
let emailConfirmado = null;
// operadores de asignación de adición
salarioUsuario += 100;
console.log(salarioUsuario);
// operadores de comparación
salarioUsuario = "1000";
console.log(salarioBasico == salarioUsuario);
// evalua tipo de dato y contenido
console.log(salarioBasico === salarioUsuario);
console.log(estadoCuenta === emailConfirmado);
// operadores aritméticos
console.log(salarioBasico + Number.parseInt(salarioUsuario));
// operadores lógicos
console.log(salarioBasico != salarioUsuario);
// evalua tipo de dato y contenido
console.log(salarioBasico !== Number.parseInt(salarioUsuario));




"use strict";
let salarioUsuarioUno = 500;
let salarioBasicoUno = 1000;
const respuesta =
    saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo";
console.log(respuesta);


