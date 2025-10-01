// const carrito = [];

// const producto1 = {
//     nombre: "Camiseta",
//     precio: 2.50 
// }

// carrito.push(producto1);
// console.log(carrito);

// const producto2 = {
//     nombre: "Pantalón",
//     precio: 15.00 
// }

// carrito.push(producto2);
// console.log(carrito);

//Solicitar al usuario tres nombres para guardarlos en un array y mostrar cada uno

import readline from 'readline';


const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout
});

// 1. Solicitar tres nombres al usuario para ser guardados en un array y mostrar luego cada uno


const nombre =[];

rl.question( "Dime un nombre: " , ( respuesta ) => {
    nombre.push(respuesta);
    rl.question( "Dime otro nombre: " , ( respuesta2 ) => {
        nombre.push(respuesta2);
        rl.question( "Dime un nombre más: " , ( respuesta3 ) => {
            nombre.push(respuesta3);
            console.log(nombre);
            rl.close();
        });
    });
});

// Solicitar al usuario tres números y calcula el promedio
const numeros =[];

rl.question( "Dime un número: " , ( respuesta ) => {
    numeros.push(parseFloat(respuesta));
    rl.question( "Dime otro número: " , ( respuesta2 ) => {
        numeros.push(parseFloat(respuesta2));
        rl.question( "Dime un número más: " , ( respuesta3 ) => {
            numeros.push(parseFloat(respuesta3));
            const promedio = numeros.reduce((acc, curr) => acc + curr, 0) / numeros.length;
            console.log("El promedio es: " + promedio);
            rl.close();
        });
    });
});

// 3. Solicita al usuario las temperaturas de tres días y muestra cuál fue la más alta

const temperaturas = [];

rl.question( "Dime la temperatura de hoy: " , ( respuesta ) => {
    temperaturas.push(parseFloat(respuesta));
rl.question( "Dime la temperatura de otro día " , ( respuesta2) => {
    temperaturas.push(parseFloat(respuesta2));
rl.question( "Dime la temperatura de otro día más: " , ( respuesta3) => {
    temperaturas.push(parseFloat(respuesta3));
    const max = Math.max(...temperaturas);
    console.log("La temperatura máxima es: " + max);
    rl.close();
});
});
});
3