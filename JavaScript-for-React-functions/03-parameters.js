const sumarSaldos = function(saldoUno,saldoDos,...args){
    let sumSaldos = 0;
    var saldoTotal = sumSaldos+saldoUno+saldoDos
    if(args.length>0) args.forEach(e =>saldoTotal+=e)
    return saldoTotal
}

console.log(sumarSaldos(10,20,40,50,10))



function saludar(nombre, apellido){
    return "Hola "+ nombre + " " + apellido + ", como estas ?"
}
console.log(saludar('Carolina','Alvarado'))





function saludar(nombre, apellido="Alvarado"){
    return "Hola "+ nombre + " " + apellido + ", como estas ?"
}
console.log(saludar('Carolina'))




const sumarSaldosDos = function(a,b,...args){
    let suma = 0;
    var total = suma+a+b
    if(args.length>0) args.forEach(e =>total+=e)
    return total
}
console.log(sumarSaldosDos(10,20,40,50,10))
