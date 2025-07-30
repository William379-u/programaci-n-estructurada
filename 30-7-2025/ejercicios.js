import readline from 'readline';

const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout
})

rl.question(' Ingrese un numero ', (numero1) => {
    console.log(`El numero ingresado es ${numero1}!`);
rl.question('Ingrese otro numero ', (numero2) => {
        console.log(`El segundo numero ingresado es ${numero2}!`);
            const suma = parseFloat(numero1) + parseFloat(numero2) 
            console.log(`La suma de los dos numeros es: ${suma}`);


 rl.question('Ingrese una temperatura en celcius ', (Celcius) => {
    let temParse = parseFloat(Celcius);
    let fahrenheit = (temParse * 9/5 ) + 32;
    console.log(`La conversión de la temperatura es: ${fahrenheit}`); 
    
rl.question(`Ingrese la base del rectangulo `, (base) => {
        let baseParse = parseFloat(base);
 rl.question(`Ingrese la altura del rectangulo `, (altura) => {
        let alturaParse = parseFloat(altura);
        let area = baseParse * alturaParse;
        console.log(`El area del rectangulo es: ${area}`);

            rl.close();
     });
    });
     });
    });
    });
