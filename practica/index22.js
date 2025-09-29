
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

let numeros = [2,4,6,7,9]
function recorrerArray(arr, calback){
    for(let item of arr){
        calback(item)
    }
}
recorrerArray(numeros, n => console.log(n * n))

function procesarUsuario(nombre, calback){
    console.log('procesando usuario, espere...')
    calback(nombre)
}

procesarUsuario('Kevin', function(nombre){
    console.log('Ya estas siendo procesado', nombre)
})

const sumar = (a,b) => a + b
const saludo = () => "Hola mundo"
console.log(sumar(40,55))
console.log(saludo())

const pares = [2,4,6,8]
const exponente = pares.map(x => x * x)
console.log("Array normal", pares)
console.log("Elevado a si mismo", exponente)

