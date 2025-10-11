// Definición de la función square
const square = (num) => num * num;

// Ejemplo de uso de square
const res = square(2);
console.log(res);

// Función mapDef corregida (legenth -> length)
function mapDef(arr, callback) {
    const res = [];
    for (let index = 0; index < arr.length; index++) {
        res[index] = callback(arr[index]);
    }
    console.log({ res });
    return res;
}

// Array de ejemplo
let arr = [1, 2, 3];
const squares = mapDef(arr, square);
console.log(squares);


function factorial (n) {
    console,log(" recibido ", n);
if(n === 0 || n ===1){
    return 1;
}else{
    console.log(" resolviendo ", n);
    return n * factorial(n-1);
}
}