import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ejercicio 1
rl.question("Ingresa un número: ", (input) => {
    let num = parseFloat(input);

    if (num > 0) {
        console.log("El número es positivo");
    } else if (num < 0) {
        console.log("El número es negativo");
    } else {
        console.log("El número es cero");
    }
    rl.close();
});

// Ejercicio 2
rl.question("Ingrese su edad: ", (input) => {
    let edad = parseInt(input);

if (edad >= 1 && edad < 18 ) {
    console.log("Eres menor de edad");
} else if (edad >= 18 && edad < 64) {
    console.log("Eres un adulto");
} else {
    console.log("Eres un adulto mayor");
}

rl.close();
});

//Ejercicio 3
rl.question("Ingresa el primer número: ", (n1) => {
    rl.question("Ingresa el segundo número: ", (n2) => {
        rl.question("Ingresa el tercer número: ", (n3) => {

            let a = parseFloat(n1);
            let b = parseFloat(n2);
            let c = parseFloat(n3);

            if (a >= b && a >= c) {
                console.log("El mayor es:", a);
            } else if (b >= a && b >= c) {
                console.log("El mayor es:", b);
            } else {
                console.log("El mayor es:", c);
            }

            rl.close();
        });
    });
});

//Ejercicio 4
rl.question("Ingre el año: ", (input) =>{
  let año = parseInt(input);

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        console.log("El año es bisiesto");
    } else {
        console.log("El año no es bisiesto");
    }

    rl.close();
});

//Ejercicio 5
rl.question("Ingrese una calificación (0-100): ", (input) => {
    let cal = parseInt(input);

    if (cal >= 90) {
        console.log("A");
    } else if (cal >= 80) {
        console.log("B");
    } else if (cal >= 70) {
        console.log("C");
    } else if (cal >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }

    rl.close();
});

//Ejercicio 6
rl.question("Ingrese un número del 1 al 7: ", (input) => {
    let dia = parseInt(input);

    switch (dia) {
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miércoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sábado"); break;
        case 7: console.log("Domingo"); break;
        default: console.log("Número fuera de rango");
    }

    rl.close();
});

//Ejercicio 7
rl.question("Ingrese un número del 1 al 12: ", (input) => {
    let mes = parseInt(input);

    switch (mes) {
        case 1: console.log("Enero - 31 días"); break;
        case 2: console.log("Febrero - 28/29 días"); break;
        case 3: console.log("Marzo - 31 días"); break;
        case 4: console.log("Abril - 30 días"); break;
        case 5: console.log("Mayo - 31 días"); break;
        case 6: console.log("Junio - 30 días"); break;
        case 7: console.log("Julio - 31 días"); break;
        case 8: console.log("Agosto - 31 días"); break;
        case 9: console.log("Septiembre - 30 días"); break;
        case 10: console.log("Octubre - 31 días"); break;
        case 11: console.log("Noviembre - 30 días"); break;
        case 12: console.log("Diciembre - 31 días"); break;
        default: console.log("Mes inválido");
    }
    rl.close();
});

//Ejercicio 8
rl.question("Ingrese el primer número: ", (n1) => {
    rl.question("Ingrese el segundo número: ", (n2) => {
        rl.question("Operación (+, -, *, /, %): ", (op) => {

            let a = parseFloat(n1);
            let b = parseFloat(n2);

            switch (op) {
                case "+": console.log("Resultado:", a + b); break;
                case "-": console.log("Resultado:", a - b); break;
                case "*": console.log("Resultado:", a * b); break;
                case "/": console.log("Resultado:", a / b); break;
                case "%": console.log("Resultado:", a % b); break;
                default: console.log("Operación inválida");
            }

            rl.close();
        });
    });
});

//Ejercicio 9
rl.question("Ingrese un número: ", (input) => {
    let num = parseInt(input);

    let mensaje = (num % 2 === 0) ? "Es par" : "Es impar";
    console.log(mensaje);

    rl.close();
});

//Ejercicio 10
rl.question("Ingrese su edad: ", (input) => {
    let edad = parseInt(input);

    let puede = (edad >= 18) ? "Puede votar" : "No puede votar";
    console.log(puede);

    rl.close();
});

//Ejercicio 11
rl.question("Precio del producto: ", (precio) => {
    rl.question("¿Es miembro? (si/no): ", (miembro) => {

        let esMiembro = miembro.toLowerCase() === "si";

        let total = esMiembro ? precio * 0.8 : precio;

        console.log("Precio final: $" + total);

        rl.close();
    });
});

//Ejercicio 12
rl.question("Primer número: ", (n1) => {
    rl.question("Segundo número: ", (n2) => {
        rl.question("Tercer número: ", (n3) => {

            let a = parseFloat(n1);
            let b = parseFloat(n2);
            let c = parseFloat(n3);

            if (a >= b) {
                if (b >= c) console.log(a, b, c);
                else if (a >= c) console.log(a, c, b);
                else console.log(c, a, b);
            } else {
                if (a >= c) console.log(b, a, c);
                else if (b >= c) console.log(b, c, a);
                else console.log(c, b, a);
            }

            rl.close();
        });
    });
});

//Ejercicio 13
let intentos = 3;

const pedirUsuario = () => {
    rl.question("Usuario: ", (usuario) => {
        if (usuario !== "admin") {
            console.log("Usuario no encontrado");
            rl.close();
        } else {
            pedirPassword();
        }
    });
};

const pedirPassword = () => {
    if (intentos === 0) {
        console.log("Acceso bloqueado");
        return rl.close();
    }

    rl.question("Contraseña: ", (pass) => {
        if (pass === "1234") {
            console.log("Acceso concedido");
            rl.close();
        } else {
            intentos--;
            console.log("Contraseña incorrecta. Intentos restantes:", intentos);
            pedirPassword();
        }
    });
};
pedirUsuario();

//Ejercicio 14
let saldo = 1000;

rl.question("Número de cuenta (4 dígitos): ", (cuenta) => {
    if (cuenta !== "1234") {
        console.log("Cuenta no encontrada");
        rl.close();
        return;
    }

    rl.question("PIN (4 dígitos): ", (pin) => {
        if (pin !== "4321") {
            console.log("PIN incorrecto");
            rl.close();
            return;
        }

        rl.question("Monto a retirar: ", (monto) => {
            monto = parseFloat(monto);

            if (monto > saldo) {
                console.log("Fondos insuficientes");
            } else {
                saldo -= monto;
                console.log("Retiro exitoso. Saldo actual:", saldo);
            }

            rl.close();
        });
    });
});


//Ejercicio 15
let precioBase = 10;

rl.question("Edad: ", (edadInput) => {
    let edad = parseInt(edadInput);

    rl.question("Día de la semana: ", (dia) => {

        dia = dia.toLowerCase();

        let descuento = 0;

        if (edad < 12 || edad >= 65) {
            descuento = 0.40;
        }

        if (dia === "miercoles" || dia === "miércoles") {
            descuento = Math.max(descuento, 0.25);
        }

        let total = precioBase - (precioBase * descuento);

        console.log("Precio final: $" + total);

        rl.close();
    });
});