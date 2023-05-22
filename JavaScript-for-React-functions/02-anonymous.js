console.log(function(){
    return "Esta función nos permite validar una cuenta"
}());


(function(){
    console.log("Con esta función poder obtener datos de un cliente")
})()

const button = document.createElement('button')

button.innerText="Eliminar cliente"

button.addEventListener('click',function(){
    alert("Cliente eliminado")
})

document.body.append(button)