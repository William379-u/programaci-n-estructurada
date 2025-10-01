// crear una función para pedir al usuario que diga escriba una lista de palabras, procesar y otra funcion para mostrar el resultado

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// let palabra = []

// function pedirPalabra() {
//     rl.question(" Ingrese una palabra o fin para terminar ", (entrada)=>{
// if (entrada.toLocaleLowerCase() == 'fin'){
//     mostrarInventario()
// }else{
//     palabra.push(entrada)
//     pedirPalabra()
// }
//   })
// }
// pedirPalabra()
// function mostrarInventario(){
//     console.log(`Original: ${palabra}`)
//     console.log(`Invertido: `, [...palabra].reverse())
//     rl.close()
// }
 


//Buscar el primer elemento PAR
// 2 funciones, 1 para pedir número y 1 para buscarPar()

// let arrayNumero= [];
// function PedirNumero() {
//     rl.question(" Ingrese un numero o fin para terminar ", (entrada)=>{
// if(entrada.toLocaleLowerCase() == 'fin'){
//     buscarPar()
// }else{
//     arrayNumero.push(entrada)
//     PedirNumero()
// }
// })
// }
// PedirNumero()
// function buscarPar(){
//     const numeroPar = arrayNumero.find(num => num % 2 == 0);

//     if (numeroPar !== undefined) {
//         console.log(`El primer número par es: ${numeroPar}`);
//     } else {
//         console.log('No se encontró ningún número par en la lista.');
//     }

//     rl.close();
// }

let arrayPalabra = [];
function PedirPalabra() {
    rl.question(" Ingrese una palabra o fin para terminar ", (entrada)=>{
if(entrada.toLocaleLowerCase() == 'fin'){
    mostrarTamaño()
}else{
    arrayPalabra.push(entrada)
    PedirPalabra()
}
})
}
PedirPalabra()

const  mostrarTamaño = () => {
    const longitudes = arrayPalabra.map(palabra => palabra.length)
    console.log(`Palabras son: ${arrayPalabra}`)
    console.log(`longitud de la palabra: ${longitudes}`)
    rl.close()
}
