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

console.log(cliente.enviarInvitacion());
// Va a provocar un error cuando se trabaje con arrow functions
// console.log(cliente.enviarFoto())