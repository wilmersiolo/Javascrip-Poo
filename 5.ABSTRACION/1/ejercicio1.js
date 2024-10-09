// Clase abstracta Empleado
class Empleado {
    // Método abstracto
    calcularSalario() {
        pass
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }

    calcularSalario() {
        return this.salarioMensual;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(horasTrabajadas, tarifaPorHora) {
        super();
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    calcularSalario() {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

// Uso de las clases
let empleadoTiempoC = new EmpleadoTiempoCompleto(400000);
document.write("------------------------------------------------ <br/>")
document.write("<b>EMPLEADO TIEMPO COMPLETO :</b> <br/>");
document.write(`Salario de tiempo completo: ${empleadoTiempoC.calcularSalario()} <br/>`);
document.write("<br/>")
document.write("------------------------------------------------ <br/>")

let empleadoPorH = new EmpleadoPorHoras(4800, 15);
document.write("------------------------------------------------ <br/>")
document.write("<b>EMPLEADO POR HORAS :</b> <br/>");
document.write(`Salario por horas: ${empleadoPorH.calcularSalario()}`);
document.write("<br/>")
document.write("------------------------------------------------ <br/>")

