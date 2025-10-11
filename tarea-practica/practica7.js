const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para preguntar al usuario y devolver una promesa
const preguntar = (mensaje) => {
  return new Promise((resolve) => {
    readline.question(mensaje, (respuesta) => {
      resolve(respuesta);
    });
  });
};

// ================================
// Ejercicio 1: Crear y llenar un array de objetos
// ================================
async function ejercicio1() {
  console.log("\n=== Ejercicio 1: Crear y llenar un array de objetos ===");
  const arrayObjetos = [];

  for (let i = 0; i < 5; i++) {
    const nombre = await preguntar(`Nombre del objeto ${i + 1}: `);
    const valor = await preguntar(`Valor del objeto ${i + 1}: `);
    arrayObjetos.push({ nombre, valor });
  }

  console.log("Array completo de objetos:", arrayObjetos);
}

// ================================
// Ejercicio 2: Sumar todos los elementos
// ================================
async function ejercicio2() {
  console.log("\n=== Ejercicio 2: Sumar todos los elementos ===");
  const numeros = [];

  for (let i = 0; i < 5; i++) {
    const num = parseFloat(await preguntar(`Número ${i + 1}: `));
    numeros.push(num);
  }

  const sumaTotal = numeros.reduce((acc, n) => acc + n, 0);
  console.log("Suma total:", sumaTotal);
}

// ================================
// Ejercicio 3: Contar elementos mayores que un valor
// ================================
async function ejercicio3() {
  console.log("\n=== Ejercicio 3: Contar elementos mayores que un valor ===");
  const numeros = [];

  for (let i = 0; i < 5; i++) {
    const num = parseFloat(await preguntar(`Número ${i + 1}: `));
    numeros.push(num);
  }

  const limite = parseFloat(await preguntar("Número límite: "));
  const mayores = numeros.filter(n => n > limite);

  console.log(`Cantidad de números mayores a ${limite}:`, mayores.length);
}

// ================================
// Ejercicio 4: Buscar un elemento
// ================================
async function ejercicio4() {
  console.log("\n=== Ejercicio 4: Buscar un elemento ===");
  const nombres = [];

  for (let i = 0; i < 5; i++) {
    const nombre = await preguntar(`Nombre ${i + 1}: `);
    nombres.push(nombre);
  }

  const buscar = await preguntar("Nombre a buscar: ");
  const encontrado = nombres.find(n => n.toLowerCase() === buscar.toLowerCase());

  if (encontrado) {
    console.log(`El nombre "${buscar}" existe en el array.`);
  } else {
    console.log(`El nombre "${buscar}" NO existe en el array.`);
  }
}

// ================================
// Ejercicio 5: Eliminar elementos repetidos
// ================================
async function ejercicio5() {
  console.log("\n=== Ejercicio 5: Eliminar elementos repetidos ===");
  const numeros = [];

  for (let i = 0; i < 5; i++) {
    const num = parseFloat(await preguntar(`Número ${i + 1}: `));
    numeros.push(num);
  }

  console.log("Array original:", numeros);

  const unicos = numeros.filter((n, index) => numeros.indexOf(n) === index);
  console.log("Array sin repetidos:", unicos);
}

// ================================
// Ejecutar todos los ejercicios
// ================================
async function main() {
  await ejercicio1();
  await ejercicio2();
  await ejercicio3();
  await ejercicio4();
  await ejercicio5();
  readline.close();
}

main();
