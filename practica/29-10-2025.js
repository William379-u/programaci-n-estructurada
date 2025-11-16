import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// ejercicio 1 parte 1
function numero(){
    rl.question("Ingrese un numero: ", (num1)=>{
    const Number = parseInt(num1)
    if(Number > 0){
        console.log("El numero es positivo: ", num1)
 rl.close();
    }else if (Number < 0){
        console.log("El numero es negativo: ", num1)
 rl.close();
    }else{
        console.log("El numero es cero: ")
        rl.close();
}
})
}
numero()

// ejercicio 1 parte 2
