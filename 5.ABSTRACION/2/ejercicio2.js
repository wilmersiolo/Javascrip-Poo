// Clase abstracta TareaEmpleado
class TareaEmpleado {
    // Método abstracto
    realizarTarea() {
        pass
    }
}

// Clase concreta Ingeniero
class Ingeniero extends TareaEmpleado {
    realizarTarea() {
        return "Diseñar y supervisar proyectos de ingeniería.";
    }
}

// Clase concreta Doctor
class Doctor extends TareaEmpleado {
    realizarTarea() {
        return "Diagnosticar enfermedades y tratar a los pacientes.";
    }
}

// Uso de las clases
let ingeniero = new Ingeniero();
document.write("-----------------------------------------------------------------<br/>")
document.write("<b>INGENIERO :</b> <br/>");
document.write(`Tarea: ${ingeniero.realizarTarea()} <br/>`);
document.write("-----------------------------------------------------------------<br/>")

let doctor = new Doctor();
document.write("-----------------------------------------------------------------<br/>")
document.write("<b>DOCTOR :</b> <br/>");
document.write(`Tarea: ${doctor.realizarTarea()}`);
document.write("<br/>")
document.write("-----------------------------------------------------------------<br/>")

