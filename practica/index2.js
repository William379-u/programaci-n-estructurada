import readline from 'readline';

const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout
})


// pide al usuario que escriba una operación matematica simple, convierte los valores a numeros Number, parseInt o parseFloat

rl.question('Escriba una operación matematica ejemplo: 10 + 20, 50 - 30, 20 * 2, 40 / 2, etc: ', (operacion) => {
    // Solo permite números, espacios y los operadores + - * /
    const regex = /^\s*-?\d+(\.\d+)?\s*[\+\-\*\/]\s*-?\d+(\.\d+)?\s*$/;
    if (!regex.test(operacion)) {
        console.log('Operación inválida. Por favor, escriba una operación matemática simple.');
        rl.close();
        return;
    }
    try {
        let resultado = eval(operacion);
        console.log(`El resultado de ${operacion} es: ${resultado}`);
    } catch (error) {
        console.log('Error: ' + error.message);
    }
    rl.close();
});