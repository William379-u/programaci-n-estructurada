const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Palíndromo
function esPalindromo(frase) {
    let limpia = frase.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let invertida = limpia.split('').reverse().join('');
    return limpia === invertida;
}

// 2. Contador de vocales
function contarVocales(cadena) {
    let coincidencias = cadena.match(/[aeiouáéíóú]/gi);
    return coincidencias ? coincidencias.length : 0;
}

// 3. Anagrama simple
function sonAnagramas(palabraA, palabraB) {
    let normalizadaA = palabraA.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('');
    let normalizadaB = palabraB.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('');
    return normalizadaA === normalizadaB;
}

// 4. Palabra más frecuente
function palabraMasFrecuente(frase) {
    let palabras = frase.toLowerCase().replace(/[^a-z0-9áéíóúñ\s]/gi, '').split(/\s+/);
    let conteo = {};
    let maxPalabra = '';
    let maxConteo = 0;

    for (let palabra of palabras) {
        conteo[palabra] = (conteo[palabra] || 0) + 1;
        if (conteo[palabra] > maxConteo) {
            maxConteo = conteo[palabra];
            maxPalabra = palabra;
        }
    }
    return maxPalabra;
}

// Ejemplo con rl
rl.question("Ingrese una frase para verificar si es palíndromo: ", (frase) => {
    console.log("¿Es palíndromo?:", esPalindromo(frase));

    rl.question("Ingrese una cadena para contar vocales: ", (texto) => {
        console.log("Cantidad de vocales:", contarVocales(texto));

        rl.question("Ingrese la primera palabra para verificar anagrama: ", (pA) => {
            rl.question("Ingrese la segunda palabra: ", (pB) => {
                console.log("¿Son anagramas?:", sonAnagramas(pA, pB));

                rl.question("Ingrese una frase para encontrar la palabra más frecuente: ", (frec) => {
                    console.log("Palabra más frecuente:", palabraMasFrecuente(frec));
                    rl.close();
                });
            });
        });
    });
});
