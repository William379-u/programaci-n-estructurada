import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//ejercio: 1
function PalabraM(palabra){
    return palabra
    .split(" ")
    .sort(" ")
    .join(" ")
}
rl.question("Ingrese su texto: ", (palabra))
console.log("Su texto ordenado es")

//ejercio 2
// function TextoMayus(Texto){
//     Texto = Texto.split('');
//     const LetraMayus = Texto.map(Letra )
// }


// ejercio 3
// function Palabra(palabra){
 
//     return palabra.length;
// }

// rl.question("Ingrese el texto: ", (palabra)=>{
//     console.log(Palabra(palabra));
//     rl.close()
// });

//ejercio 4
// function producto(Producto1,Producto2,Producto3){
//     return Producto1 + Producto2 + Producto3
// }

// rl.question("Ingrese el precio del primer producto: ", (Prod1)=>{
// rl.question("Ingrese el precio del segundo producto: ", (Prod2)=>{
// rl.question("Ingrese el precio del tercer producto: ", (Prod3)=>{

//     console.log("El precio total de los producto es: ", producto(Number(Prod1), Number(Prod2), Number(Prod3)));
//     rl.close();
// })
// })
// })

//ejercio 5
// function PalabraMayus(palabra){
//     return palabra.toUpperCase();
// }

// rl.question("Ingrese un texto: ", (palabra)=>{
//     console.log("Su palabra mayuscula es: ", PalabraMayus(palabra));
//     rl.close();
// })

//ejercio 6 
