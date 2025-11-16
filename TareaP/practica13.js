import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Ejercicio 1
function pedirNumeroEstudiantes() {
    rl.question("Cantidad de estudiantes: ", (input) => {
        let total = parseInt(input);
        if (total <= 0) return rl.close();

        let estudiantes = [];
        capturarEstudiante(1, total, estudiantes);
    });
}

function capturarEstudiante(actual, total, lista) {
    console.log(`\nEstudiante ${actual}:`);
    rl.question("Nombre: ", (nombre) => {
        rl.question("Calificación (0-100): ", (cal) => {
            cal = parseInt(cal);

            if (cal < 0 || cal > 100) {
                console.log("⚠️ Calificación inválida, vuelva a ingresarla.");
                return capturarEstudiante(actual, total, lista);
            }

            let categoria = "";
            if (cal >= 90) categoria = "Excelente";
            else if (cal >= 80) categoria = "Bueno";
            else if (cal >= 70) categoria = "Satisfactorio";
            else categoria = "Necesita mejorar";

            lista.push({ nombre, cal, categoria });

            if (actual < total) capturarEstudiante(actual + 1, total, lista);
            else mostrarResultados(lista);
        });
    });
}

function mostrarResultados(lista) {
    let resumen = {
        Excelente: 0,
        Bueno: 0,
        Satisfactorio: 0,
        "Necesita mejorar": 0
    };

    for (let est of lista) resumen[est.categoria]++;

    console.log("\n=== RESULTADOS ===");
    console.log(resumen);
    rl.close();
}
pedirNumeroEstudiantes();

//Ejercicio 2
function iniciar() {
    rl.question("¿Cuántos productos ingresará?: ", (n) => {
        let cantidad = parseInt(n);
        if (Number.isNaN(cantidad) || cantidad <= 0) {
            console.log("Por favor ingresa un número entero mayor que 0.");
            return iniciar(); 
        }

        let productos = {};
        capturarProducto(1, cantidad, productos);
    });
}

function capturarProducto(actual, total, productos) {
    rl.question(`Nombre del producto ${actual}: `, (nombreRaw) => {
        let nombre = String(nombreRaw).trim();
        if (nombre === "") {
            console.log("El nombre no puede estar vacío.");
            return capturarProducto(actual, total, productos);
        }

        rl.question(`Precio de ${nombre}: `, (precioRaw) => {
            let precio = parseFloat(precioRaw);
            if (Number.isNaN(precio) || precio < 0) {
                console.log("Precio inválido. Introduce un número (ej: 10.5).");
                return capturarProducto(actual, total, productos);
            }

            productos[nombre.toLowerCase()] = precio;

            if (actual < total) {
                capturarProducto(actual + 1, total, productos);
            } else {
                console.log("\nProductos ingresados:");
                Object.entries(productos).forEach(([k,v]) => console.log(`- ${k}: $${v}`));
                buscarProducto(productos);
            }
        });
    });
}

function buscarProducto(productos) {
    let intentos = 3;

    function intentar() {
        if (intentos === 0) {
            console.log("❌ Se acabaron los intentos. Saliendo.");
            return rl.close();
        }

        rl.question("\nProducto a buscar: ", (nombreRaw) => {
            let nombre = String(nombreRaw).trim().toLowerCase();
            if (nombre === "") {
                console.log("Nombre vacío. Intenta de nuevo.");
                return intentar();
            }

            if (productos.hasOwnProperty(nombre)) {
                console.log(`Precio de "${nombre}": $${productos[nombre]}`);
                return rl.close();
            } else {
                intentos--;
                console.log(`Producto no encontrado. Intentos restantes: ${intentos}`);
                if (intentos > 0) return intentar();
                else {
                    console.log("No se encontró el producto tras 3 intentos.");
                    return rl.close();
                }
            }
        });
    }

    intentar();
}

iniciar();

//Ejercicio 3
function iniciarVotacion() {
    console.log("Sistema de Votación");
    console.log("Candidatos válidos: A, B, C");
    console.log('Escribe "fin" para terminar.\n');

    let votosA = 0;
    let votosB = 0;
    let votosC = 0;

    function pedirVoto() {
        rl.question("Ingrese su voto (A, B, C o fin): ", (votoRaw) => {
            let voto = String(votoRaw).trim().toUpperCase();

            if (voto === "FIN") {
               
                console.log("\n--- RESULTADOS ---");
                console.log(`A: ${votosA} votos`);
                console.log(`B: ${votosB} votos`);
                console.log(`C: ${votosC} votos`);

                if (votosA === 0 && votosB === 0 && votosC === 0) {
                    console.log("\nNo hubo votos.");
                    return rl.close();
                }

              
                if (votosA > votosB && votosA > votosC) console.log("\nGanador: Candidato A");
                else if (votosB > votosA && votosB > votosC) console.log("\nGanador: Candidato B");
                else if (votosC > votosA && votosC > votosB) console.log("\nGanador: Candidato C");
                else console.log("\nHay un empate.");

                return rl.close();
            }

      
            if (voto !== "A" && voto !== "B" && voto !== "C") {
                console.log("❌ Voto inválido. Solo se acepta A, B, C o fin.");
                return pedirVoto();
            }

            if (voto === "A") votosA++;
            if (voto === "B") votosB++;
            if (voto === "C") votosC++;

            pedirVoto();
        });
    }

    pedirVoto();
}

iniciarVotacion();

//Ejercicio 4
function generarSerie() {
    rl.question("Número inicial: ", (iniRaw) => {
        rl.question("Número final: ", (finRaw) => {
            let inicio = parseInt(iniRaw);
            let fin = parseInt(finRaw);

            if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
                console.log("❌ Rango inválido.");
                return rl.close();
            }

            console.log("\nSeleccione un filtro:");
            console.log("1. Solo pares");
            console.log("2. Solo impares");
            console.log("3. Múltiplos de un número");
            
            rl.question("Opción: ", (opRaw) => {
                let opcion = parseInt(opRaw);

                if (opcion === 1) {
                    console.log("\n--- Números pares ---");
                    for (let i = inicio; i <= fin; i++) {
                        if (i % 2 === 0) console.log(i);
                    }
                    return rl.close();
                }

                if (opcion === 2) {
                    console.log("\n--- Números impares ---");
                    for (let i = inicio; i <= fin; i++) {
                        if (i % 2 !== 0) console.log(i);
                    }
                    return rl.close();
                }

                if (opcion === 3) {
                    rl.question("Ingrese el número para múltiplos: ", (mulRaw) => {
                        let multi = parseInt(mulRaw);

                        console.log(`\n--- Múltiplos de ${multi} ---`);
                        for (let i = inicio; i <= fin; i++) {
                            if (i % multi === 0) console.log(i);
                        }
                        return rl.close();
                    });
                } else {
                    console.log("❌ Opción incorrecta.");
                    rl.close();
                }
            });
        });
    });
}

generarSerie();

//Ejercicio 5
let inventario = [];

function menu() {
    console.log("\n--- GESTOR DE INVENTARIO ---");
    console.log("1. Agregar producto");
    console.log("2. Vender producto");
    console.log("3. Mostrar inventario");
    console.log("4. Salir");

    rl.question("Seleccione una opción: ", (opRaw) => {
        let opcion = parseInt(opRaw);

        switch(opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                venderProducto();
                break;
            case 3:
                mostrarInventario();
                break;
            case 4:
                console.log("Programa finalizado.");
                rl.close();
                break;
            default:
                console.log("❌ Opción inválida.");
                menu();
        }
    });
}

function agregarProducto() {
    rl.question("Nombre del producto: ", (nombre) => {
        rl.question("Cantidad: ", (cantRaw) => {
            let cantidad = parseInt(cantRaw);

            if (isNaN(cantidad) || cantidad < 0) {
                console.log("❌ Cantidad inválida.");
                return menu();
            }

            inventario.push({ nombre, cantidad });
            console.log("✔ Producto agregado.");
            menu();
        });
    });
}

function venderProducto() {
    rl.question("Producto a vender: ", (nombre) => {
        let producto = inventario.find(p => p.nombre === nombre);

        if (!producto) {
            console.log("❌ Producto no encontrado.");
            return menu();
        }

        rl.question("Cantidad a vender: ", (cantRaw) => {
            let cantidad = parseInt(cantRaw);

            if (isNaN(cantidad) || cantidad <= 0) {
                console.log("❌ Cantidad inválida.");
                return menu();
            }

            if (cantidad > producto.cantidad) {
                console.log("❌ No hay suficiente inventario.");
                return menu();
            }

            producto.cantidad -= cantidad;
            console.log(`✔ Venta realizada. Nuevo stock: ${producto.cantidad}`);
            menu();
        });
    });
}

function mostrarInventario() {
    console.log("\n--- INVENTARIO ---");
    if (inventario.length === 0) {
        console.log("No hay productos.");
    } else {
        inventario.forEach(p => {
            console.log(`${p.nombre}: ${p.cantidad}`);
        });
    }
    menu();
}

menu();