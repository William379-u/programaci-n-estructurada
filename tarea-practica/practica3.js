// Ejercicio 1: Perfil Personal
const información = {
    personal: {
    nombre: "William",
    edad: 17,
    carrera: "Ingeniería en desarrollo de software"
    },

    dirección: {
    calle: "Av. Siempre Viva",
    },

    hobbies: ["Jugar videojuegos", "Dormir", "Hacer ejercicio", "Ver redes sociales"],
    redesSociales: {
        facebook: "WilliamFB",
        instagram: "WilliamIG"
    }
    };

    console.log(información);

// Ejercicio 2: Registro de Calificaciones 

const calificaciones = {
    matematicas: {
        notaFinal: 6
    },
    ciencias: {
        notaFinal: 6
    },
    historia: {     
        notaFinal: 5
    },
    arte: {
        notaFinal: 4
    }
};

console.log(calificaciones);

const promedio = (calificaciones.matematicas.notaFinal + calificaciones.ciencias.notaFinal + calificaciones.historia.notaFinal + calificaciones.arte.notaFinal) / 4;
console.log("El promedio es:", promedio, promedio >= 6 ? "Aprobado" : "Reprobado");


// Ejercicio 3: Lista de Tareas 
const listaTareas = {
  tareas: [
    { titulo: "Tarea de Matemáticas", descripcion: "Resolver 10 ejercicios de ecuaciones", completada: false },
    { titulo: "Informe de Laboratorio", descripcion: "Escribir la conclusión y referencias", completada: true },
    { titulo: "Estudiar para el examen de Historia", descripcion: "Repasar la independencia de El Salvador", completada: false }
  ],

  marcarCompletada: function(titulo) {
    const tarea = this.tareas.find(t => t.titulo === titulo);
    if (tarea) {
      tarea.completada = true;
      console.log(`La tarea "${titulo}" fue marcada como completada ✅`);
    } else {
      console.log(`No se encontró la tarea "${titulo}" ❌`);
    }
  },

  tareasPendientes: function() {
    return this.tareas.filter(t => !t.completada);
  }
};


console.log("📘 Todas las tareas escolares:", listaTareas.tareas);

listaTareas.marcarCompletada("Tarea de Matemáticas"); // Marca una tarea como completada

console.log("📒 Tareas pendientes:", listaTareas.tareasPendientes());
