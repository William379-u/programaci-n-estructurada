const estudiante ={
nombre: "Kevin",
apellido: "Granillo",
edad: "18 años",
direccion: {
pais: "El Salvador",
calle: "Poniente sur",
numCasa: "40"
 }
}

// Acceder al objeto 
console.log(estudiante);
console.log(estudiante.direccion);

// Acceder con corchetes
console.log(estudiante["direccion"]);

// Agregar nueva propiedad
estudiante.colorOjos = "Cafe oscuro";
console.log(estudiante);

// Agregando propiedad al objecto aninado
estudiante.direccion.codigoPostal = "503";
console.log(estudiante["direccion"]);

// Modificamos propiedad
estudiante.direccion.numCasa = 41;
console.log(estudiante.direccion);

// Eliminando propiedades del objecto aninado
delete estudiante.direccion.numCasa;
console.log(estudiante.direccion);