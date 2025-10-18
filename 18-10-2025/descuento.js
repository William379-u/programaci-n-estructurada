import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularDescuento(precio, descuento){
    precio = parseFloat(precio);
    descuento = parseFloat(descuento);

    let des = precio * descuento;

    let totalPagar = precio - des;

    console.log(`El descuento del producto es de $: ${des} \n total a pagar es de $: ${totalPagar}`)
}
 
rl.question('Ingrese el precio del producto: ', precio=>{
    rl.question('Ingrese el descuento a aplicar, expresando en decimales Ej: 0.20 para 20%: $ ', des=>{
        calcularDescuento(precio, des);
        rl.close();
    })
})