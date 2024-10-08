// Clase base Profesionales
class Profesionales {
    mostrarInfo() {
        // Método que será sobrescrito por las clases derivadas
    }

    trabajar() {
        // Método que será sobrescrito por las clases derivadas
    }
}

// Clase Médico
class Medico extends Profesionales {
    constructor(nombre, especialidad, añosExperiencia) {
        super();
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.añosExperiencia = añosExperiencia;
    }

    mostrarInfo() {
        document.write("________________________________________________________________________________________________<br>");
        document.write("Hola, soy un Doctor de la clínica Santa María<br>");
        document.write(`Nombre: Doctor. ${this.nombre}<br>`);
        document.write(`Especialidad: ${this.especialidad}<br>`);
        document.write(`Años de experiencia: ${this.añosExperiencia}<br>`);
    }

    trabajar() {
        document.write(`El Doctor. ${this.nombre} trabaja atendiendo pacientes.<br>`);
        document.write("________________________________________________________________________________________________<br><br>");
    }
}

// Clase Ingeniero
class Ingeniero extends Profesionales {
    constructor(nombre, especialidad, proyectosRealizados) {
        super();
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.proyectosRealizados = proyectosRealizados;
    }

    mostrarInfo() {
        document.write("Hola, soy un ingeniero SENA<br>");
        document.write(`Nombre: Ingeniero. ${this.nombre}<br>`);
        document.write(`Especialidad: ${this.especialidad}<br>`);
        document.write(`Proyectos realizados: ${this.proyectosRealizados}<br>`);
    }

    trabajar() {
        document.write(`El Ingeniero. ${this.nombre} trabaja diseñando y desarrollando proyectos de software.<br>`);
        document.write("________________________________________________________________________________________________<br><br>");
    }
}

// Clase Docente
class Docente extends Profesionales {
    constructor(nombre, materia, añosExperiencia) {
        super();
        this.nombre = nombre;
        this.materia = materia;
        this.añosExperiencia = añosExperiencia;
    }

    mostrarInfo() {
        document.write("Hola, soy un profesor SENA<br>");
        document.write(`Nombre: Profesor. ${this.nombre}<br>`);
        document.write(`Materia: ${this.materia}<br>`);
        document.write(`Años de experiencia: ${this.añosExperiencia}<br>`);
    }

    trabajar() {
        document.write(`El Profesor. ${this.nombre} trabaja enseñando a los estudiantes.<br>`);
        document.write("________________________________________________________________________________________________<br><br>");
    }
}

// Función que utiliza polimorfismo
function mostrarInformacion(profesional) {
    profesional.mostrarInfo();
    profesional.trabajar();
}

// Crear instancias de cada clase con atributos
let medico = new Medico("Juan Pérez", "Cardiología", 10);
let ingeniero = new Ingeniero("Ana Gómez", "Software", 15);
let docente = new Docente("Carlos Ruiz", "Matemáticas", 8);

// Llamar a la función con diferentes tipos de profesionales
mostrarInformacion(medico);
mostrarInformacion(ingeniero);
mostrarInformacion(docente);








