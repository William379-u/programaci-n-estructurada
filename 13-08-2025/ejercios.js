import  Readline  from "readline";
const rl = Readline.createInterface({
  input: process.stdin,             
output: process.stdout
});

// substring
rl.question(`Ingrese el codigo del pedido( ej:PED-2025-00045): `,(codigo) => {
const año= codigo.substring(4,8);
const numero= codigo.substring(9);
console.log(`El año del pedido es: ${año}`);
 console.log(`El código del pedido es: ${numero}`);

rl.close();
});

gracias


 