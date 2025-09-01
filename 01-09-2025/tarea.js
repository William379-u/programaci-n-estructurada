const producto ={
    detalle: {
        nombre: "HP Victus",
        precio: "800",
        categoria: "Computadoras",
    },
inventario: {
stock: "50",
proveedor: "Chepeland",
ubicacion: "El Salvador",

historial: {
Fechaingreso: "01-09-2025",
Ultimaventa: "18-08-2025",
VentaTotal: "1000",
}
}
}
// Acceder al objeto
console.log(producto);
console.log(producto.detalle);

// Modificamos propiedad
producto.inventario.stock =100;
console.log(producto.inventario);

producto.detalle.categoria = "Electronica";
console.log(producto.detalle);

const nombreProducto = producto.detalle.nombre;
const precioProducto = producto.detalle.precio;

console.log("Nombre:", nombreProducto);
console.log("Precio:", precioProducto);


// ejercicio2
const app ={
informacionpersonal: {
nombre: "Axel Guevara",
edad: "25",
email: "Snorlax@gmail.com"
},

preferenciapp: {
idioma: "Español",
notificacion: "Activada",
tema: "Oscuro",
},

tiempodeuso: {
fechaingreso: "01-09-2025",
ultimoacesso: "28-08-2025",
numsecciones: "5",
}

}
app.preferenciapp.idioma = "Ingles";
console.log(app.preferenciapp);

app.tiempodeuso.ultimoacesso = "01-09-2025";
console.log(app.tiempodeuso);

delete app.preferenciapp.notificacion; 
console.log(app.preferenciapp);

const nombreapp= app.informacionpersonal.email;
const appidioma = app.preferenciapp.idioma;

console.log("email:", nombreapp);
console.log("idioma:", appidioma);


const biblioteca = {
    informacicion: {
        titulo: "El principito",
        autor: "Chepe",
        genero: "Fantasía"
    },
    disponibilidad: {
        copias: "5",
        prestado: "2",
        ubicacion: "Estante A3"
    },
    registro: {
        fechapub: "01-01-2018",
        fechain: "28-12-2019",
        ultimaver: "15-08-2019"
    }
};

console.log("Autor:", biblioteca.informacicion.autor);

const copiasDisponibles = parseInt(biblioteca.disponibilidad.copias) - parseInt(biblioteca.disponibilidad.prestado);
console.log("Ejemplares disponibles:", copiasDisponibles);

const fechaActual = new Date().toLocaleDateString('es-ES');
biblioteca.registro.ultimaver = fechaActual;

biblioteca.informacicion.genero = "Aventura";

const tituloLibro = biblioteca.informacicion.titulo;
const ubicacionLibro = biblioteca.disponibilidad.ubicacion;


console.log("Título:", tituloLibro);
console.log("Ubicación:", ubicacionLibro);
console.log("Objeto actualizado:", biblioteca);