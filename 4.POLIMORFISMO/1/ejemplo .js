// Clase Aprendiz
class Aprendiz {
    constructor(nombres, apellidos, cedula, sexo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.sexo = sexo;
        this.formacion = prompt("Programa de formación: ");
        this.regional = prompt("Regional: ");
    }

    mostrarInfo() {
        document.write("_____________________________________________________________________________________<br>");
        document.write("Hola, soy un aprendiz SENA<br>");
        document.write(`${this.nombres} ${this.apellidos}<br>`);
        document.write(`CC: ${this.cedula}<br>`);
        document.write(`Sexo: ${this.sexo}<br>`);
        document.write(`Estudiante del programa: ${this.formacion} de la Regional ${this.regional}<br><br>`);
        document.write("_____________________________________________________________________________________<br>");
    }
}

// Clase Instructor
class Instructor {
    constructor(nombres, apellidos, cedula, area) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.area = area;
    }

    mostrarInfo() {
        document.write("Hola, soy un instructor del SENA<br>");
        document.write(`${this.nombres} ${this.apellidos}<br>`);
        document.write(`CC: ${this.cedula}<br>`);
        document.write(`Área de instrucción: ${this.area}<br><br>`);
        document.write("_____________________________________________________________________________________<br>");
    }
}

// Clase Coordinador
class Coordinador {
    constructor(nombres, apellidos, cedula, departamento) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.departamento = departamento;
    }

    mostrarInfo() {
        document.write("Hola, soy un coordinador del SENA<br>");
        document.write(`${this.nombres} ${this.apellidos}<br>`);
        document.write(`CC: ${this.cedula}<br>`);
        document.write(`Departamento: ${this.departamento}<br><br>`);
        document.write("_____________________________________________________________________________________<br>");
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(aprendiz) {
    aprendiz.mostrarInfo();
}

// Creación de objetos de cada clase
let objetoAprendiz = new Aprendiz("Samuel Elias", "Vega Barrios", 1231338164, "Masculino");
let objetoInstructor = new Instructor("Laura", "Rodríguez", 987654321, "Programación");
let objetoCoordinador = new Coordinador("Carlos", "Martínez", 123456789, "Recursos Humanos");

// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(objetoAprendiz);
mostrarInformacion(objetoInstructor);
mostrarInformacion(objetoCoordinador);








