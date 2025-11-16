//funcion de un semaforo
import {stdin, stdout } from 'process'
import readline from 'readline'

const rl =readline.createInterface({
    input: stdin,
    output: stdout
})

// rl.question("Elige el color del semaforo: ", (color)=>{
//     switch(color) {
//     case 'color':
//             console.log("Elegiste el semaforo color rojo ")
//             break;
//      case 'color':
//             console.log(`Elegiste el semaforo color ${color}`)
//             break;
//      case 'color':
//             console.log("Elegiste el semaforo color verde")
//             break;

//         default:
//             console.log("Error de color, no existe")
//             break;
//     }
//     rl.close();
// })

// let rutaBuces = ["90b", "90G", "90F", "90FA"]

// for(let i = 0; i < array.length; i++){
// console.log("Ruta :", rutaBuces[i])
// console.log("Item", i)
// }

rl.question("Ingrese hasta que numero quiere que llegue el contador ", (num)=>{
    let toNum = parseInt(num)
    for(let i = 0; i <= toNum;i++){
        if(i % 2 !==0){
            console.log(i)
        }
        rl.close();
    }
})
