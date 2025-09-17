// Enunciado 1
const empleado = {
    nombre: "William José Martínez Canales",
    edad: "17 años",
    salario: "$150",
    activo: "true",
    fechaingreso: "15/08/2021",
    habilidades: ["Excel", "Word", "PowerPoint"]
};
console.log(empleado);

console.log(delete empleado.activo);
console.log(empleado);

console.log(empleado.departamento = "Contabilidad");
console.log(empleado);

empleado.salario = parseFloat(empleado.salario.replace("$", "")) * 1.15;
console.log(empleado);

// Enunciado 2
const computadora = {
    marca: "HP",
    modelo: "Victus",
    especificaciones: {
        procesador: "AMD RYZEN 5 8630H",
        ram: "32gb",
        almacenamiento: "512gb SSD",
    }
};
console.log(computadora);

console.log(computadora.especificaciones.ram = "16gb");
console.log(computadora);

console.log(computadora.especificaciones.sistemaoperativo = "Windows 11");
console.log(computadora);

console.log(delete computadora.especificaciones.almacenamiento);
console.log(computadora);


console.log(`Computadora:
  Marca: ${computadora.marca}
  Modelo: ${computadora.modelo}
  Especificaciones:
    Procesador: ${computadora.especificaciones.procesador}
    RAM: ${computadora.especificaciones.ram}
    Sistema Operativo: ${computadora.especificaciones.sistemaoperativo}
`);


// Enunciado 3
const vehiculo = {
    marca: "Mazda",
    año: "1900",
    seguro: {
        compañia: "Mapfre",
        numeroPoliza: "123456789",
        vigente: "true",
    }
};

console.log(vehiculo);

console.log(vehiculo.seguro.compañia = "Seguros segurito");
console.log(vehiculo);

console.log(`${vehiculo.seguro.fechavencimiento = "20/09/2025"}`);
console.log(vehiculo);

console.log(`${delete vehiculo.seguro.vigente}`);
console.log(vehiculo);


console.log(`Vehículo:
  Marca: ${vehiculo.marca}
  Año: ${vehiculo.año}
  Seguro:
    Compañía: ${vehiculo.seguro.compañia}
    Número de Póliza: ${vehiculo.seguro.numeroPoliza}
    Fecha de Vencimiento: ${vehiculo.seguro.fechavencimiento}
`);
