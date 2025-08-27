import { stdin, stdout } from 'node:process';
import readline from 'readline'

const rd = readline.createInterface({
    input: stdin,
    output: stdout,
});

function esPalindromo(texto) {
    const limpio = texto.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return limpio === limpio.split('').reverse().join('');
}

function contarVocales(cadena) {
    const coincidencias = cadena.match(/[aeiou]/gi);
    return coincidencias ? coincidencias.length : 0;
}

function sonAnagramas(palabraA, palabraB) {
    const normalizar = str => str.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('');
    return normalizar(palabraA) === normalizar(palabraB);
}

function palabraMasFrecuente(frase) {
    const palabras = frase.toLowerCase().replace(/[^a-z0-9\s]/gi, '').split(/\s+/);
    const conteo = {};
    for (let palabra of palabras) conteo[palabra] = (conteo[palabra] || 0) + 1;
    return Object.keys(conteo).reduce((a, b) => conteo[a] >= conteo[b] ? a : b);
}

rd.question('Escribe algo: ', (respuesta) => {
    console.log(`Escribiste: ${respuesta}`);
    console.log(`¿Es un palíndromo? ${esPalindromo(respuesta)}`);
    console.log(`Número de vocales: ${contarVocales(respuesta)}`);
    console.log(`¿Son anagramas? ${sonAnagramas(respuesta, 'otraPalabra')}`);
    console.log(`Palabra más frecuente: ${palabraMasFrecuente(respuesta)}`);
    rd.close();
});