class Personas {
    // método constructor
    constructor(nombres, apellidos, identidad, fechanacimiento, sexo) {
        this._nombres = nombres; // privado (convención en JS usando _)
        this._apellidos = apellidos; // privado
        this._identidad = identidad; // privado
        this.fechanacimiento = fechanacimiento; // público
        this.sexo = sexo; // público
    }

    // método getter para nombres
    obtenerNombres() {
        return this._nombres;
    }

    // método getter para apellidos
    obtenerApellidos() {
        return this._apellidos;
    }

    // método getter para identidad
    obtenerIdentidad() {
        return this._identidad;
    }

    // método setter para nombres
    establecerNombres(nuevoNombres) {
        this._nombres = nuevoNombres;
    }

    // método setter para apellidos
    establecerApellidos(nuevoApellidos) {
        this._apellidos = nuevoApellidos;
    }

    // método setter para identidad
    establecerIdentidad(nuevaIdentidad) {
        this._identidad = nuevaIdentidad;
    }

    // método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`Nombres: ${this._nombres}<br>`);
        document.write(`Apellidos: ${this._apellidos}<br>`);
        document.write(`N° Identidad: ${this._identidad}<br>`);
        document.write(`Fecha nacimiento: ${this.fechanacimiento}<br>`);
        document.write(`Sexo: ${this.sexo}<br>`);
    }
}

// Crear un objeto de la clase Personas
const persona = new Personas("Jorge", "Rojas", 1102345678, "14/09/2000", "M");

// Mostrar detalles de la persona
persona.mostrarDetalles();

document.write("<hr>");

// Modificar atributos encapsulados usando setters y obtenerlos con getters
persona.establecerNombres("Carlos"); // setter
document.write(`Nombres: ${persona.obtenerNombres()} <br>`); // getter
persona.establecerApellidos("Perez"); // setter
document.write(`Apellidos: ${persona.obtenerApellidos()} <br>`); // getter
document.write(`N° Identidad: ${persona.obtenerIdentidad()} <br>`); // getter
document.write(`Fecha nacimiento: ${persona.fechanacimiento} <br>`); // público
document.write(`Sexo: ${persona.sexo} <br>`); // público







