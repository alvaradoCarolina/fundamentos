'use strict';

const cliente = {
    nombre:"Carolina",
    apellido:"Alvarado",
    edad:25,
    direccion:{
        ciudad:"Quito",
        telefono:"0984609598",
        calle:"La vicentina"
    },
    amigos:['Steven','Peter','José','Camila'],
    estado:true,
    enviarInvitacion (){
        return `enviar invitación a ${this.amigos[0]}`
    },
    enviarFoto: function (){
        return `enviar foto a ${this.amigos[3]}`
    }
}

console.log("Obtener las claves:",Object.keys(cliente))
console.log("Obtener los valores:",Object.values(cliente))
console.log("Obtener las claves y valores en un array:",Object.entries(cliente))