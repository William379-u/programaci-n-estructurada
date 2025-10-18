import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularArea(base, altura){
    let calculo = parseFloat(base * altura);
    return calculo;
}

rl.question("Ingre la base del rectangulo: ", base=>{
    rl.question("Ingrese la altura del rectangulo: ", altura=>{

        let result = calcularArea(base, altura);
        console.log(`El área del rectangulo es: ${result}`);
        rl.close();
    })
})