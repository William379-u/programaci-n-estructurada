//operadores arithmeticos
let a = 10;
let b = 5;

suma = a + b; 
console.log("Suma: ", a + b); // Suma
console.log("Resta: ", a - b); // Resta
console.log("Multiplicación: ", a * b); // Multiplicación   
console.log("División: ", a / b); // División
console.log("Módulo: ", a % b); // Módulo

//Operaciones de comparación
let edad1 = 18;
let edad2 = 21;
console.log("¿Edad 1 > Edad 2?" , edad1 > edad2); // Mayor que
console.log("¿Edad 1 < Edad 2?" , edad1 < edad2); // Menor que
console.log("¿Edad 1 == Edad 2?" , edad1 >= edad2); // Igual que
console.log("¿Edad 1 != Edad 2?" , edad1 <= edad2); // Diferente de
console.log("¿Edad 1 >= Edad 2?" , edad1 == edad2); // mayor o igual que
console.log("¿Edad 1 <= Edad 2?" , edad1 != edad2); // menor o igual que

//operadores de asignación
let punto = 0;

punto = +10; 
punto +=10;

punto -= 5;
punto *= 2;

//Operadores lógicos
let tieneTarea = false;
let estudio = true;

let puedeSalir = !tieneTarea && estudio; // AND lógico
console.log("¿Puede salir a jugar ?", puedeSalir); 

//Operador ternario
let numero =4;

let resultado = (numero % 2 === 0) ? "Es par" : "Es impar";
console.log("El número es:", resultado); // Operador ternario

//Ejercios
1
let base = 5;
let altura = 10;

console.log("Área del triángulo: ", (base * altura) / 2); 

2
let numero1 = 18;
let numero2 = 21;
console.log("¿Número 1 es mayor o igual que Número 2?", numero1 >= numero2);

3
let num = 20;
console.log(num >= 10 && num <=20 ? "Número dentro del rango" : "Número fuera del rango");

4
let num1 = 15;
num1 += 5; 
num1 *= 2;
console.log("Nuevo valor de num1: ", num1);

5
let nu1 = 10;
let nu2 = 20;
