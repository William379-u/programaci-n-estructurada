let edad = 20;
let tieneDUI = true;

let puedeVotar = edad >= 18 && tieneDUI ? "Puede votar" : "No puede votar";
console.log(puedeVotar);

let age = 45;
let esMiembro = true;
let descuento = age >= 30 || esMiembro ? "Descuento aplicado" : "No aplica descuento";
console.log(descuento);

let edadNecesaria = 12;
let estatura = 1.60;
let puedeSubirse = edadNecesaria >= 12 && estatura >= 1.50 ? "Puede subirse" : "No puede subirse";
console.log(puedeSubirse);