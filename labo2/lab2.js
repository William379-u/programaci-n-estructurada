import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arraygasto = [];
const preguntas = [
    "Ingrese un gasto que tuvo en el mes: ",
    "Ingrese otro gasto que tuvo en el mes: ",
    "Ingrese un gasto más que tuvo en el mes: "
];

function pedirGastos(i = 0) {
    if (i < preguntas.length) {
        rl.question(preguntas[i], (respuesta) => {
            arraygasto.push(parseFloat(respuesta));
            pedirGastos(i + 1);
        });
    } else {
        const totalgasto = arraygasto.reduce((acc, curr) => acc + curr, 0);
        console.log(`El gasto total del mes es: ${totalgasto}`);
        arraygasto.forEach((gasto, idx) => {
            console.log(`El gasto #${idx + 1} del mes fue: ${gasto}`);
        });

        const totalgasti = arraygasto.reduce((acc, curr) => acc + curr, 0);
        rl.close();
    }
}

pedirGastos();



let litrosArray = [];
const preguntasLitros = [
    "Ingrese la cantidad de litros que gastó en el primer viaje: ",
    "Ingrese la cantidad de litros que gastó en el segundo viaje: ",
    "Ingrese la cantidad de litros que gastó en el tercer viaje: "
];

function pedirLitros(i = 0) {
    if (i < preguntasLitros.length) {
        rl.question(preguntasLitros[i], (respuesta) => {
            console.log(`Cantidad de litros del viaje #${i + 1}: ${respuesta}`);
            litrosArray.push(parseFloat(respuesta));
            pedirLitros(i + 1);
        });
    } else {
        const total = litrosArray.reduce((acc, curr) => acc + curr, 0);
        console.log(`El total de litros gastados en el mes es: ${total}`);

        const promedio = total / litrosArray.length;
        console.log(`El promedio de litros gastados en el mes es: ${promedio}`);

        rl.close();
    }
}

pedirLitros();

let arrayprecio = [];
const preguntasPrecio = [
    "Ingrese el precio del primer producto: ",
    "Ingrese el precio del segundo producto: ",
    "Ingrese el precio del tercer producto: "
];

function pedirPrecios(i = 0) {
    if (i < preguntasPrecio.length) {
        rl.question(preguntasPrecio[i], (precio) => {
            console.log(`Precio del producto #${i + 1}: ${precio}`);
            arrayprecio.push(parseFloat(precio));
            pedirPrecios(i + 1);
        });
    } else {
        const total = arrayprecio.reduce((acc, curr) => acc + curr, 0);
        console.log(`El total de los productos es: ${total}`);

        const iva = total * 0.13;
        console.log(`El IVA de los productos es: ${iva}`);

        const totalconiva = total + iva;
        console.log(`El total de los productos con IVA es: ${totalconiva}`);

        rl.close();
    }
}

pedirPrecios();



let sueldoArray = [];
const preguntasSueldo = [
    "Ingrese su sueldo base: ",
    "Ingrese el bono que recibe: ",
    "Ingrese el descuento por seguro: "
];

function pedirSueldo(i = 0) {
    if (i < preguntasSueldo.length) {
        rl.question(preguntasSueldo[i], (respuesta) => {
            sueldoArray.push(parseFloat(respuesta));
            pedirSueldo(i + 1);
        });
    } else {
        const [sueldoBase, bono, descuento] = sueldoArray;
        const totalSueldo = sueldoBase + bono;
        console.log(`El sueldo base es: ${sueldoBase}`);
        console.log(`El bono recibido es de: ${bono}`);
        console.log(`El descuento aplicado por seguro es: ${descuento}`);
        console.log(`El sueldo total antes de descuento es: ${totalSueldo}`);

        const salarioFinal = sueldoBase + bono - descuento;
        console.log(`El salario final es: ${salarioFinal}`);

        rl.close();
    }
}

pedirSueldo();