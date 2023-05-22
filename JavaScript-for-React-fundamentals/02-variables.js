'use strict';

// asignar una variable
var nombreUsuario = "Carolina"
var dinero
// reasignar el valor a una variable declarada
nombreUsuario = "Steven"
dinero = 100

console.log(nombreUsuario+" "+dinero);

"use strict";
console.log(commentsPost);
var commentsPost;

if (true) {
    var commentsPost = 10;
}
console.log(commentsPost);

"use strict";
// asignar una variable
let nombreUsuario = "Erika";
let dinero;
// no se puede declarar una variable con el mismo nombre
// let nombreUsuario = "Toshi"
nombreUsuario = "Pepe";
dinero = 555;
console.log(nombreUsuario + " " + dinero);





"use strict";
// asignar una variable
const nombreUsuario = "Alexander";
// siempre deben inicializar con un valor
let dinero = 2000;
// no se puede declarar una variable con el mismo nombre
// const nombreUsuario = "Toshi"
// no puede ser reasignado un valor
// nombreUsuario = "Toshi"
// dinero = 900
console.log(nombreUsuario + " " + dinero);



'use strict';

//Uso del var
var estadoUno = true
if (estadoUno) {
    var estadoUno = false
}
console.log(estadoUno)
for (var i = 0; i < 15; i++)
{
    console.log(i)
}
console.log(i)


//Uso del let
let estadoDos = true
if (estadoDos) {
    let estadoDos = false
    console.log(estadoDos)
}
console.log(estadoDos)

for (let i = 0; i < 15; i++)
{
    console.log(i)
}
console.log(i)



//Uso del const
const estadoTres = true
if (estadoTres) {
    const estadoTres = false
    console.log(estadoTres)
}
console.log(estadoTres)

const i = 0
for ( i = 0; i < 15; i++) {
    console.log(i)
}