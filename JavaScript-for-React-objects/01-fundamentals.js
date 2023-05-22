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
console.log(user.estado);
console.log(user.enviarInvitacion());
console.log(user.enviarFoto());









'use strict';
const clienteDos = {
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
    sendFoto: function (){
        return `enviar foto a ${this.amigos[3]}`
    }
}

// Agregar un par de clave y valor al objeto
clienteDos.image ="t.ly/Rhgs"

// Eliminar un par de clave y valor del objeto
delete clienteDos.estado

console.log(clienteDos);











