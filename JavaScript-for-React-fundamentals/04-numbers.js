'use strict';
// Es importante reconocer el tipo de valor asignado
const dinero = "50"
const costoTotal = 50
console.log(costoTotal,dinero);
console.log(typeof(costoTotal), typeof(dinero));
console.log("suma:",costoTotal+50);
console.log("resta:",costoTotal-50);
console.log("multiplicación:",costoTotal*50);
console.log("división:",costoTotal/50);
console.log("módulo:",costoTotal%50);
// Importante el manejo de operadores de incremento y decremento
let costoTotalActual = 50
console.log(++costoTotalActual );
console.log(costoTotalActual++);
let dineroActual = 50
console.log(--dineroActual);
console.log(dineroActual--);



'use strict';
const valorTotal = 40.38
console.log(Math);
console.log(Math.PI);
console.log(Math.round(valorTotal));
console.log(Math.sqrt(25));
console.log(Math.abs(-valorTotal));
console.log(Math.pow(2,5));
console.log(Math.min(10,4));
console.log(Math.max(58,-4));
console.log(Math.round(Math.random()*40));


'use strict';
console.log(2 + 6 * 9)
console.log(3 * 1 ** 7)
console.log(900 * 1.4)
console.log(900 * 4.42)



'use strict';
let edadCliente = "10"
let precioConsola = "99.99"
console.log(Number.parseInt(edadCliente));
console.log(Number.parseFloat(precioConsola));
console.log(Number.isInteger(edadCliente));
console.log(`${+edadCliente + +precioConsola}`);