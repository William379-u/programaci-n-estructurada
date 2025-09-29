const numeros=[10, 20, 30, 40, 50];

const meses= new Array('enero', 'febrero', 'marzo');

const deTodo= ['Hola',10,null,true, {nombre: 'Juan', trabajador: 'programador'}];
console.table(deTodo[4][5]);

numeros[1]=80;
console.log(numeros);

meses.push('abril');
console.log(meses);

meses.pop();
console.log(meses);

meses.shift();
console.log(meses);

meses.unshift('Enero');
console.log(meses);

for(i=0;i<meses.length;i++){
    console.log(meses[i]);
}

numeros.splice(2,0,80);
console.log(numeros);

//Imprimir el primer y el ultimo día de la semana
const dias =["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log(dias[0]);
console.log(dias[dias.length -1]);


