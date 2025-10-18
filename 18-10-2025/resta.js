import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function saludar(nombre){
    console.log(`Hola ${nombre}, bienvenido a javaScript`);
}

let resta = (n1,n2)=>{ return n1 - n2; }


rl.question("Ingrese un nombre para saludarlo: ", (nom)=>{
    rl.question("Ingese el primer numero para restar: ", (num1)=>{
    rl.question("Ingrese el segundo numero para restar: ", (num2)=>{
 saludar(nom);  
 console.log("La resta de ambos numero es: ", resta(num1,num2));
 rl.close();

       })
    })
})

