import { stdin, stdout } from 'node:process';
import readline from 'readline'

const rd = readline.createInterface({
    input: stdin,
    output: stdout,
});

// 1
rd.question("ingrese una frase: ", (frase) => {
    const reversed = frase.split("").reverse().join("");
    console.log("Frase invertida: " + reversed);
    console.log("palindromo: " + (frase === reversed ? "Si" : "No"));
    
 // 2   
rd.question("Ingrese una frase: ", (frase) => {
    const words = frase.split(" ");
    const wordCount = words.length;
    const primeraLetra = frase.charAt(0);
    const esMayuscula = primeraLetra === primeraLetra.toUpperCase();
    console.log(`La frase tiene ${wordCount} palabras.`);
    console.log(`¿La primera letra es mayúscula? ${esMayuscula ? "Sí" : "No"}`);

    rd.close();
});
});