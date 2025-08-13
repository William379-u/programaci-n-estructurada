//importar el módulo
import  Readline  from "readline";
const rl = Readline.createInterface({
  input: process.stdin,             
output: process.stdout
});

//Realizamos la pregunta
rl.question('Ingrese una frase: ', (frase) => {
    console.log('\n === Tratamiento de cadenas === ');

// 1.Length
const fraseLength = frase.length;
console.log(`La longitud de la frase es: ${fraseLength}`);

// 2. toUpperCase
const fraseMayus = frase.toUpperCase();
console.log(`La frase en mayúsculas es: ${fraseMayus}`);

// 3. toLowerCase
const fraseMinus = frase.toLowerCase();
console.log(`La frase en minúsculas es: ${fraseMinus}`);

// 4. trim
const fraseTrim = frase.trim();
console.log(`La frase sin espacios al inicio y al final es: "${fraseTrim}"`);

// 5. substring
const subCadena = frase.substring(0, 5);
console.log(`La subcadena de los primeros 5 caracteres es: "${subCadena}"`);

// 6. slice
const subCadenaSlice = frase.slice(0,5);
console.log(`La subcadena usando slice de los primeros 5 caracteres es: "${subCadenaSlice}"`);

// 7. slice con índices negativos
const subcadenaSlice2 = frase.slice(-5);
console.log(`La subcadena usando slice de los últimos 5 caracteres es: "${subcadenaSlice2}"`);

// 8. replaceAll
const fraseReplace = frase.replace('Hola', 'You are my');
console.log(`La frase con la primera 'Hola' reemplazada por 'You are my' es: "${fraseReplace}"`);

// 9. split divide la frase en palabras separandolas por un espacio
const fraseArray = frase.split(' ');
console.log(`La frase divivda en palabras es: ${fraseArray}`);

// 10. includes
const contieneHola = frase.includes('Hola');
console.log(`La frase contiene la palabra 'Hola' ${contieneHola}`);

// 11. indexOf
const indiceHola = frase.indexOf('Hola');
console.log(`El índice de la primera aparición de 'Hola' es: ${indiceHola}`);

// 12. startsWith
const empiezaConHola = frase.startsWith('Hola');
console.log(`La frase empieza con 'Hola': ${empiezaConHola}`);

// 13. endsWith
const terminaConMundo = frase.endsWith('mundo');
console.log(`La frase termina con 'mundo': ${terminaConMundo}`);








rl.close();
})
