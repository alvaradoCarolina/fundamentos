'use strict';
const cliente = {
    nombre:"Carolina",
    apellido:"Alvarado",
    edad:25
}

const informacionAdicional = {
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

const informacionCliente = {...cliente,...informacionAdicional}
console.log(informacionCliente)