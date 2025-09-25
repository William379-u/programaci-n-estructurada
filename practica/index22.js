
// Funciones Avanzadas

// Closure Ejemplos
function crearContador (){
    let contador = 0
    return function(){
        contador++
        return contador
    }
}

let contador1 = crearContador()
let contador2 = crearContador()
console.log(contador1())
console.log(contador1(), "<= contador 1\n")
console.log("Hola soy el contador 2 =>", contador2())

// El saldo de una cuenta bancaria
function cuentaDeAhorro(inicial){
    let saldo = inicial;
    return{
        verSaldo: ()=> saldo,
        depositar: x => saldo += x,
        retirar: x => saldo -= x
    }
}
let miCuenta = cuentaDeAhorro(100)
console.log(`Tu saldo es: ${miCuenta.verSaldo()}`)
miCuenta.depositar(250)
miCuenta.retirar(110)
console.log(`Tu saldo es: ${miCuenta.verSaldo()}`)

