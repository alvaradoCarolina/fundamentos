const cliente = {
    nombre: "Carolina",
    informacion: function () {
    setTimeout(()=> {
        console.log("Hola, el cliente " + this.nombre + "es muy frecuente")
        }, 1000);
    },
};

persona.informacion()
