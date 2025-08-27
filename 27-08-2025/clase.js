// // const nombre = "Juan";
// const edad = 30;
// const altura =1.50;

// Creación de objetos con object literal
const persona = {
  nombre: "Axel",
  edad: 25,
  altura: 1.62  
};

// imprimir el objeto
console.log(persona);
// acceder a las propiedades por corchete
console.log(persona['edad']);

// Agregamos más propiedades al objeto
persona.nacionalidad = "Salvadoreño";
console.log(persona);

// Eliminar propiedades del objeto
delete persona.altura;
console.log(persona);

// Modificamos el valor de una propiedad o llave
persona.nombre="Axel el gordi bueno"
console.log(persona); 

// Asignando el valor de la propiedad del objeto a una variable
const nom = persona.nombre
console.log(nom);

// Destructuring
// const {nombre} = persona;

// console.log(nombre);

// // const {edad} = persona; 
// console.log(edad);

const {nombre, edad} =persona;
console.log(nombre);
console.log(edad);


