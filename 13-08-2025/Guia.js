import  Readline  from "readline";
const rl = Readline.createInterface({
  input: process.stdin,             
output: process.stdout
});

// ejercicio 1 - trim
rl.question('Ingrese su nombre completo: ', (nombre) => {
  const nombrelimpio = nombre.trim();
  const nombreSinEspacios = nombre.replaceAll(" ", "");
  const numCaracteres = nombreSinEspacios.length;

  console.log(`Nombre limpio: ${nombrelimpio}`);
  console.log(`Nombre sin espacios: ${nombreSinEspacios}`);
  console.log(`Número de caracteres sin espacios: ${numCaracteres}`);

// ejercicio 2 - toLowerCase - endsWith
rl.question('Ingrese su correo electrónico: ', (correo) => {
  const correoMinusculas = correo.toLowerCase();
  const terminaConGmail = correoMinusculas.endsWith('@gmail.com');
    console.log(`Correo en minúsculas: ${correoMinusculas}`);   
    console.log(`El correo termina con '@gmail.com': ${terminaConGmail}`);

// ejercicio 3 - slice
rl.question('Ingrese su codigo de estudiante: ', (codigo) => {
const subCadena = codigo.slice(-4);
console.log(`Los últimos 4 caracteres del código son: ${subCadena}`);

// ejercio 4 - ndexOf
rl.question('Ingrese el mensaje que contenga el error": ', (error) => {
const indiceError = error.indexOf('error');
console.log(`El índice de la primera aparición de 'error' es: ${indiceError}`);


  rl.close();
});
});
}); 
});