//Impoeramos modulo
// const readline = require('readline'); 
import readline from 'readline';

//Creamos la interfaz 
const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout
})

//Hacemos una pregunta
rl.question('¿Cuál es tu nombre? ', (nombre) => {
    console.log(`Hola, ${nombre}!`);
        rl.question ('¿En que ciudad vives? ', (ciudad) => {
            console.log(`Vives en ${ciudad}!`);
            rl.question ('¿Dime tu color favorito? ', (color) => {
            console.log(`Tu color favortios es ${color}!`);
                rl.question ('¡Dime una palabras! ', (palabra1) => {
                     rl.question ('¡Dime otra palabras! ', (palabra2) => {
                    console.log(`Tus dos palabras unidas son ${palabra1}${palabra2}!`);  
    //Cerramos la interfaz
    rl.close();
           });
            });
        });
    });
});
