import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// // ejercio: 1
// function cadenadeTexto(Texto){
//     Texto = Texto.split("")
//     const textoOrdenado = Texto.sort().join("");
//     return textoOrdenado;
// }
// rl.question("Ingrese una cadena de texto: ", (Texto)=>{
//     console.log(cadenadeTexto(Texto));
//     rl.close();
// });

// // ejercio 2
// function CadenadeTexto(Texto){
//     Texto = Texto.split(' ')
//     const LetraMayus = Texto.map(Letra => Letra[0].toUpperCase()+Letra.slice(1).toLowerCase()).join(" ");
//     return LetraMayus
// }
// rl.question("Ingrese una cadena de texto: ", (Texto)=>{
//     console.log(CadenadeTexto(Texto));
//     rl.close();
// });

// // ejercio 3
// function Palabra(palabra){
//     palabra = palabra.length;
//     return palabra; 
// }
// rl.question("Ingrese una palabra: ", (palabra)=>{
//     console.log(Palabra(palabra));
//     rl.close();
// });

// // ejercio 4
// function producto(Producto1, Producto2, Producto3){
//     const totalSum = Producto1 + Producto2 + Producto3;
//     return totalSum;
// }
// rl.question("Ingrese el precio del primer producto: ", (prod1)=>{
//     rl.question("Ingrese el precio del segundo producto: ", (prod2)=>{
//         rl.question("Ingrese el precio del tercer producto: ", (prod3)=>{
//             console.log("El precio total es: ", producto(Number(prod1), Number(prod2), Number(prod3)));
//             rl.close();
//         });
//     });
// });

// // ejercio 5 
// function palabraMayuscula(palabra){
//     const palabraMayus = palabra.toUpperCase();
//     return palabraMayus;
// }
// rl.question("Ingrese una palabra: ", (palabra)=>{
//     console.log(palabraMayuscula(palabra));
//     rl.close();
// });

// // ejercio 6
// function temperaturaFahrenheit(celsius){
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }
// rl.question("Ingrese la temperatura en grados Celsius: ", (celsius)=>{
//     console.log("La temperatura en grados Fahrenheit es: ", temperaturaFahrenheit(Number(celsius)));
//     rl.close();
// });

// // ejercio 7 
// function descuento(precio,descuentoPorcentaje){
//     const descuento = (precio * descuentoPorcentaje) / 100;
//     const preciotot = precio - descuento;
//     return preciotot;
// }
// rl.question("Ingrese el precio del producto: ", (precio)=>{
//     rl.question("Ingrese el porcentaje de descuento: ", (descuentoPorcentaje)=>{
//         console.log("El precio con descuento es: ", descuento(Number(precio), Number(descuentoPorcentaje)));
//         rl.close();
//     });
// });

// ejercio 8
function trabajo(salarioBase, horasExtras, valorhoratrabajonormal){
    const salarioTot = salarioBase + (horasExtras * valorhoratrabajonormal * 1.5);
    return salarioTot;
}
rl.question("Ingrese el salario base del empleado: ", (salarioBase)=>{
    rl.question("Ingrese la cantidad de horas extras trabajadas: ", (horasExtras)=>{
        rl.question("Ingrese el valor por hora de trabajo normal: ", (valorhoratrabajonormal)=>{
            console.log("El salario total es: ", trabajo(Number(salarioBase), Number(horasExtras), Number(valorhoratrabajonormal)));
            rl.close();
        });
    });
});
