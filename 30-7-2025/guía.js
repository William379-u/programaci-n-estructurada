import readline from 'readline';

const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout
})
// primer ejercicio
rl.question(' Ingrese una nota :', (nota1) => { 
    console.log(`La nota ingresada es ${nota1}!`);
rl.question('Ingrese otra nota :', (nota2) => {
        console.log(`La segunda nota ingresada es ${nota2}!`);
rl.question('Ingrese otra nota :', (nota3) => {
        console.log(`El tercer numero ingresado es ${nota3}!`);
        const suma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
            console.log(`La suma de las tres notas es: ${suma}`); 
        const promedio = suma / 3;
        console.log(`El promedio de las notas es: ${promedio}`);

// segundo ejercicio
rl.question('Ingrese la cantidad de kilometros recorridos: ', (kilometros) => { 
    let kmParse = parseFloat(kilometros);
    let millas = kmParse * 0.621371;
    console.log(`La conversión de kilometros a millas es: ${millas.toFixed(2)}`);
    
// tercer ejercicio
rl.question('Ingrese el precio del producto comprado: ', (producto) => {
    let precioProducto = parseFloat(producto);
rl.question('Ingrese la cantidad de productos comprados: ', (cantidad) => {
    let cantidadParse = parseFloat(cantidad);
    let total = precioProducto * cantidadParse;
    console.log(`El total a pagar por los productos es: ${total.toFixed(2)}`);


rl.close(); 
 });
 });
 });
 });
 });
 });