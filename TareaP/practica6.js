// ================================
// Ejercicio 1: Closure acumulador
// ================================
function crearAcumulador() {
  let total = 0; // variable privada
  return function(numero) {
    total += numero;
    return total;
  }
}

const sumaAcumulada = crearAcumulador();

console.log("=== Ejercicio 1: Closure acumulador ===");
console.log(sumaAcumulada(5)); // 5
console.log(sumaAcumulada(2)); // 7
console.log(sumaAcumulada(6)); // 13

// ================================
// Ejercicio 2: Callback de operación
// ================================
function operar(a, b, callback) {
  return callback(a, b);
}

// Callbacks
const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const producto = (x, y) => x * y;

console.log("\n=== Ejercicio 2: Callback de operación ===");
console.log("Suma:", operar(5, 3, suma));       // 8
console.log("Resta:", operar(5, 3, resta));     // 2
console.log("Producto:", operar(5, 3, producto)); // 15

// ================================
// Ejercicio 3: Arrow function y map
// ================================
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(n => n ** 2);

console.log("\n=== Ejercicio 3: Arrow function y map ===");
console.log("Array original:", numeros);
console.log("Array al cuadrado:", cuadrados);

// ================================
// Ejercicio 4: Recursión de suma
// ================================
function sumaRecursiva(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumaRecursiva(arr.slice(1));
}

console.log("\n=== Ejercicio 4: Recursión de suma ===");
console.log("Suma de [1,2,3,4,5]:", sumaRecursiva([1, 2, 3, 4, 5]));

// ================================
// Ejercicio 5: Buscar elemento con arrow y find
// ================================
const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 19 },
  { nombre: "Maria", edad: 16 }
];

const mayorDeEdad = personas.find(p => p.edad > 18);

console.log("\n=== Ejercicio 5: Buscar elemento con arrow y find ===");
console.log("Primer mayor de edad:", mayorDeEdad);
