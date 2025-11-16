import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function Celcius(conversion){
    return  conversion = (conversion * 9/2) + 32
}

rl.question("Ingrese su temperatura en celcius: ", (celcius)=>{
console.log("Su temperatura en fahrenheit es: ", Celcius(celcius))
rl.close();
});