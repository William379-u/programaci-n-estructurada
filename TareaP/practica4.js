// Ejercicio 1: Registro de Empleados

const empleados = [
  { nombre: "Ana", edad: 28, departamento: "Recursos Humanos", salario: 3500 },
  { nombre: "Luis", edad: 32, departamento: "Finanzas", salario: 4000 },
  { nombre: "Marta", edad: 26, departamento: "Marketing", salario: 3000 },
  { nombre: "Carlos", edad: 30, departamento: "Ventas", salario: 4500 }
];

function mostrarEmpleados() {
  console.log("Lista de empleados:");
  empleados.forEach(e => {
    console.log(`Nombre: ${e.nombre}, Edad: ${e.edad}, Departamento: ${e.departamento}, Salario: $${e.salario}`);
  });
}

function buscarEmpleado(nombre) {
  const empleado = empleados.find(e => e.nombre.toLowerCase() === nombre.toLowerCase());
  if (empleado) {
    console.log("Empleado encontrado:", empleado);
  } else {
    console.log(`Empleado con nombre "${nombre}" no encontrado `);
  }
}

function salarioPromedio() {
  const total = empleados.reduce((suma, e) => suma + e.salario, 0);
  const promedio = total / empleados.length;
  console.log(`Salario promedio: $${promedio.toFixed(2)}`);
}

mostrarEmpleados();                     
buscarEmpleado("Marta");               
salarioPromedio();                      