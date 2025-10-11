// Ejercicio 1: Gestor de Transacciones 
// Ejercicio 1: Gestor de Transacciones 
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let transacciones = [ 
  { id: 1, tipo: "deposito", monto: 1000, fecha: "2024-01-15", categoria: "salario" }, 
  { id: 2, tipo: "retiro", monto: 200, fecha: "2024-01-16", categoria: "compras" }, 
  { id: 3, tipo: "deposito", monto: 500, fecha: "2024-01-17", categoria: "freelance" } 
];

function procesarTransacciones(...nuevasTransacciones) {
  nuevasTransacciones.forEach(transaccion => {
    if (!transaccion.id || !transaccion.tipo || !transaccion.monto || !transaccion.fecha) {
      console.warn("Transacción inválida:", transaccion);
      return;
    }
    transacciones = [...transacciones, transaccion];
  });
}

function calcularBalance() {
  return transacciones.reduce((balance, t) => {
    if (t.tipo === "deposito") return balance + t.monto;
    if (t.tipo === "retiro") return balance - t.monto;
    return balance;
  }, 0);
}

function analizarGastos(periodo = "mes") {
  const hoy = new Date();
  const gastos = transacciones.filter(t => {
    const fecha = new Date(t.fecha);
    if (periodo === "mes") {
      return fecha.getMonth() === hoy.getMonth() && fecha.getFullYear() === hoy.getFullYear();
    }
    if (periodo === "dia") {
      return fecha.toDateString() === hoy.toDateString();
    }
    if (periodo === "anio") {
      return fecha.getFullYear() === hoy.getFullYear();
    }
    return true; 
  });

  const resumen = gastos.reduce((acc, t) => {
    if (!acc[t.categoria]) acc[t.categoria] = 0;
    acc[t.categoria] += t.monto;
    return acc;
  }, {});

  return resumen;
}

function buscarTransacciones(criterios = {}) {
  const { tipo, categoria, fecha } = criterios;

  return transacciones.filter(t => {
    let coincide = true;
    if (tipo) coincide = coincide && t.tipo === tipo;
    if (categoria) coincide = coincide && t.categoria === categoria;
    if (fecha) coincide = coincide && t.fecha === fecha;
    return coincide;
  });
}

function mostrarMenu() {
  console.log("\n--- Gestor de Transacciones ---");
  console.log("1. Ver balance");
  console.log("2. Analizar gastos del mes");
  console.log("3. Buscar transacciones por tipo");
  console.log("4. Agregar transacción");
  console.log("5. Salir");
  rl.question("Elige una opción: ", opcion => {
    switch (opcion) {
      case "1":
        console.log("Balance actual:", calcularBalance());
        mostrarMenu();
        break;
      case "2":
        console.log("Gastos del mes:", analizarGastos("mes"));
        mostrarMenu();
        break;
      case "3":
        rl.question("Tipo (deposito/retiro): ", tipo => {
          const resultados = buscarTransacciones({ tipo });
          console.log("Resultados:", resultados);
          mostrarMenu();
        });
        break;
      case "4":
        rl.question("Tipo (deposito/retiro): ", tipo => {
          rl.question("Monto: ", monto => {
            rl.question("Fecha (YYYY-MM-DD): ", fecha => {
              rl.question("Categoría: ", categoria => {
                const id = transacciones.length + 1;
                procesarTransacciones({ id, tipo, monto: Number(monto), fecha, categoria });
                console.log("Transacción agregada.");
                mostrarMenu();
              });
            });
          });
        });
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Opción inválida.");
        mostrarMenu();
    }
  });
}

mostrarMenu();