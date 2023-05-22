function validarCelular(cliente, celular){
    console.log("El celular es valido");
}


const validarCorreo = (cliente, email)=>{
    console.log("El emial ha sido verificado")
}


const registrarCliente = (photo)=>console.log("El cliente ha sido registrado");

validarCelular()

validarCorreo()

registrarCliente()


const button = document.createElement('button')

button.innerText="Registrar cliente"

button.addEventListener('click',()=>alert("cliente registrado"))

document.body.append(button)








const buscador = document.querySelector('#search-178')
const button = document.createElement('button')
button.innerText="verificar"
estado= false
button.addEventListener('click',()=>{
    if (estado) return alert("El carrito se enceuntra lleno")
    return alert("El carrito se encuentra sin productos")
})
buscador.appendChild(button);

