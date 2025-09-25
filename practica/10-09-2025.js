import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inventario = {
    productos: [],
    agregarProducto: function() {
        rl.question('Ingrese el nombre del producto:\n', (nombre) => {
            rl.question('Ingrese la cantidad del producto disponible:\n', (cantidad) => {
                rl.question('Ingrese el precio unitario del producto:\n', (precio) => {
                    let id = Math.floor(Math.random() * 10000 + 1);
                    const stock = parseInt(cantidad);
                    const decimalPrecio = parseFloat(precio);
                    if (nombre && !isNaN(stock) && !isNaN(decimalPrecio)) {
                        let producto = {
                            id: id,
                            nombre: nombre,
                            cantidad: stock,
                            precio: decimalPrecio,
                            proveedor: {
                                nombre: "",
                                telefono: ""
                            }
                        };
                        this.productos.push(producto);
                        console.log(this.productos);
                    } else {
                        console.log('No se puede agregar el producto, revisa que los datos sean correctos.');
                    }
                    rl.close();
                });
            });
        });
    }
};

inventario.agregarProducto();

