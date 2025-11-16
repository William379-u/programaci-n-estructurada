import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// // ejercio: 1
// Escriba un programa que solicite al usuario una cadena de texto (palabra o frase)
// utilizando la librería readline, el programa debe de contener una función que permita
// recibir la cadena ingresada y devuelva una cadena con todas sus letras ordenadas
// alfabéticamente.

function cadenadeTexto(Texto){
    Texto = Texto.split("")
    const textoOrdenado = Texto.sort().join("");
    return textoOrdenado;
}
rl.question("Ingrese una cadena de texto: ", (Texto)=>{
    console.log(cadenadeTexto(Texto));
    rl.close();
});

// // ejercio 2
// Escriba un programa que solicite al usuario una cadena de texto, este programa debe
// de contener una función que reciba la cadena como parámetro y devuelva una nueva
// cadena donde la primera letra de cada palabra esté en mayúsculas. 
function CadenadeTexto(Texto){
    Texto = Texto.split(' ')
    const LetraMayus = Texto.map(Letra => Letra[0].toUpperCase()+Letra.slice(1).toLowerCase()).join(" ");
    return LetraMayus
}
rl.question("Ingrese una cadena de texto: ", (Texto)=>{
    console.log(CadenadeTexto(Texto));
    rl.close();
});

// // ejercio 3
//  Escriba un programa que solicite al usuario una palabra o cadena de texto, crea una
// función que reciba como parámetro el texto y devuelva la cantidad de caracteres que
// contiene
function Palabra(palabra){
    palabra = palabra.length;
    return palabra; 
}
rl.question("Ingrese una palabra: ", (palabra)=>{
    console.log(Palabra(palabra));
    rl.close();
});

// // ejercio 4
// Escriba un programa que solicite al usuario el precio de tres productos, y cree una
// función que permita calcular la suma total del precio de los tres productos, mostrar
// en consola la suma. 
function producto(Producto1, Producto2, Producto3){
    const totalSum = Producto1 + Producto2 + Producto3;
    return totalSum;
}
rl.question("Ingrese el precio del primer producto: ", (prod1)=>{
    rl.question("Ingrese el precio del segundo producto: ", (prod2)=>{
        rl.question("Ingrese el precio del tercer producto: ", (prod3)=>{
            console.log("El precio total es: ", producto(Number(prod1), Number(prod2), Number(prod3)));
            rl.close();
        });
    });
});

// // ejercio 5 
// Solicite al usuario una cadena y utilice una función que permita devolver el texto en
// mayúsculas. 
function palabraMayuscula(palabra){
    const palabraMayus = palabra.toUpperCase();
    return palabraMayus;
}
rl.question("Ingrese una palabra: ", (palabra)=>{
    console.log(palabraMayuscula(palabra));
    rl.close();
});

// // ejercio 6
// Solicite al usuario una temperatura en grados celsius y cree una función que permita
// convertir esa temperatura Celsius a Fahrenheit.
function temperaturaFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
rl.question("Ingrese la temperatura en grados Celsius: ", (celsius)=>{
    console.log("La temperatura en grados Fahrenheit es: ", temperaturaFahrenheit(Number(celsius)));
    rl.close();
});

// // ejercio 7 
// Cree una función que permita calcular el descuento de un producto. Solicite al usuario
// el precio de un producto y el porcentaje de descuento, devuelva el precio final. 
function descuento(precio,descuentoPorcentaje){
    const descuento = (precio * descuentoPorcentaje) / 100;
    const preciotot = precio - descuento;
    return preciotot;
}
rl.question("Ingrese el precio del producto: ", (precio)=>{
    rl.question("Ingrese el porcentaje de descuento: ", (descuentoPorcentaje)=>{
        console.log("El precio con descuento es: ", descuento(Number(precio), Number(descuentoPorcentaje)));
        rl.close();
    });
});

// ejercio 8
// Cree una función que permita calcular el salario total de un empleado. Solicite al usuario
// el salario base del empleado, la cantidad de horas extras trabajadas y el valor por hora
// de trabajo normal, devuelva el salario total.
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
