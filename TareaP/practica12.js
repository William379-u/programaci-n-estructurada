import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ejercicio 1
rl.question("Ingresa un número N: ", (input) => {
    let N = parseInt(input);
    let suma = 0;

    for (let i = 1; i <= N; i++) {
        suma += i;
    }

    console.log(`La suma de 1 hasta ${N} es: ${suma}`);
    rl.close();
});

//Ejercicio 2
rl.question("Ingresa un número para la tabla: ", (input) => {
    let n = parseInt(input);

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }

    rl.close();
});

//Ejercicio 3
let Contador = 0;
let pares = 0;
let impares = 0;

function pedirNumero() {
    if (Contador < 10) {
        rl.question(`Ingresa el número ${Contador + 1}: `, (input) => {
            let num = parseInt(input);

            if (num % 2 === 0) pares++;
            else impares++;

            Contador++;
            pedirNumero();
        });
    } else {
        console.log(`Pares: ${pares}`);
        console.log(`Impares: ${impares}`);
        rl.close();
    }
}
pedirNumero();

//Ejercicio 4
rl.question("Ingresa un número N: ", (input) => {
    let N = parseInt(input);

    console.log("=== Con for ===");
    for (let i = N; i >= 1; i--) {
        console.log(i);
    }

    console.log("=== Con while ===");
    let i = N;
    while (i >= 1) {
        console.log(i);
        i--;
    }

    rl.close();
});

//Ejercicio 5
rl.question("Ingresa un número para calcular su factorial: ", (input) => {
    let n = parseInt(input);
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${n} es: ${factorial}`);
    rl.close();
});

// //Ejercicio 6
let Suma = 0;

function pedirNumero() {
    rl.question("Ingresa un número (negativo para terminar): ", (input) => {
        let num = parseFloat(input);

        if (num < 0) {
            console.log(`La suma total es: ${Suma}`);
            rl.close();
        } else {
            Suma += num;
            pedirNumero();
        }
    });
}
pedirNumero();

// //Ejercicio 7
let suma = 0;
let contador = 0;

function pedirCalificacion() {
    rl.question("Ingresa una calificación (negativa para terminar): ", (input) => {
        let cal = parseFloat(input);

        if (cal < 0) {
            if (contador === 0) {
                console.log("No ingresaste calificaciones válidas.");
            } else {
                console.log(`El promedio es: ${suma / contador}`);
            }
            rl.close();
        } else {
            suma += cal;
            contador++;
            pedirCalificacion();
        }
    });
}
pedirCalificacion();