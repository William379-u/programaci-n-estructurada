import readline from "readline"
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})
// ejercio1
// const contraseña ="1234"
// let mensaje;

// rl.question("Ingrese su contraseña: ", (pass) => {
//    if(contraseña === pass){
//     mensaje = 'contraseña correcta';
//    }else{
//     mensaje= 'contraseña incorrecta'
//    }
//    console.log(`${mensaje}`);
//    rl.close();
// })

// ejercio2
// let mensaje;

// rl.question("Ingrese su numero: ", (num) =>{
// if(num > 0){
//     mensaje = 'Su numero es positivo';
// }else {
//     mensaje = 'Su numero es negativo';
// }
// console.log(`${mensaje}`);
// rl.close
// })

// ejercio3
// function descuento(compra){
// let des;


//     if(compra >= 100){
//           des = 0.10;
//     }else if(compra >=50 && compra <=99){
//         des = 0.5;
//     }
//     else{
//         des = 0
//     }
//     const total = compra-(compra*des);
//     return total;
// }
// rl.question("Ingrese el monto de su compra: ", (precio)=>{
//    let compra = Number(precio);
//    const TotalPagar= descuento(compra);
//    console.log(`Monto de la compra es de: $${compra.toFixed(2)} el total a pagar con descuento es de : $${TotalPagar}.`);
//    rl.close();    
// })

// ejercio4
// const nombres=['Alejandro','Hugo','Chepe'];

// function existe(nombre){
//     if(nombres.includes(nombre)){
//         return `${nombre} si esta en la lista`;
    
//     }else{
//         return `${nombre} no esta en la lista`;
//     } 
// }
// rl.question('Ingrese su nombre: ', (nom)=>{
// let resultado = existe(nom);
// console.log(resultado);
// rl.close();
// })

// ejercio5
function Edades (años){


    if(años >= 0 && años <=11){
          return "Estas en la etapa de la Niñez"
    }else if(años >= 12 && años <=17){
          return "Estas en la etapa de la Adolescencia" 
    }else if (años >= 18 && años <=59){
          return "Estas en la etapa de la Adultez"
    }else if(años >= 60){
       return "Estas en la etapa de la Vejez"
    }

}

rl.question('Ingrese su edad: ', (año)=>{
    let edades = Number(año)
    console.log(Edades(edades))
     rl.close();
})

