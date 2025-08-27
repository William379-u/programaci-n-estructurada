const animal = {
  Raza: "Aguacatero",
  Tamaño: "40 cm",
  Color: "cafe"
};
console.log(animal);

animal.bravo = "no, solo come y duerme";
console.log(animal);

delete animal.Raza;
console.log(animal);

const usuario = {
  nombre: "Juan",
  edad: 30,
  email: "juan@example.com"
};
console.log(usuario);


const { nombre, edad, email } = usuario;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Email:", email);

usuario.telefono = "1234-5678";
console.log(usuario);

delete usuario.email;
console.log(usuario);