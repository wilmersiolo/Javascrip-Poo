class Electronico {
    // Constructor
    constructor(marca, modelo, tipoProcesador) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipoProcesador = tipoProcesador;
        this.capacidadRam = parseInt(prompt("Digite la cantidad de memoria RAM: "));
    }

    // Método público para registrar el electronico
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELECTRONICO REGISTRADO </div> <br>");
        document.write("Marca:",this.marca,"<br>");
        document.write("Modelo:" ,this.modelo,"<br>");
        document.write("Tipo de procesador: ",this.tipoProcesador,"<br>");
    }
}

class Laptop extends Electronico {
    // Constructor
    constructor(marca, modelo, tipoProcesador, tipoDiscoDuro) {
        super(marca, modelo, tipoProcesador); // Llamada al constructor de la superclase
        this.tipoDiscoDuro = tipoDiscoDuro;
        this.duracionBateria = parseFloat(prompt("Digite la duración de la batería en HORAS: "));
    }

    // Método para encender el electrónico
    encender() {
        document.write("<hr>");
        if (this.duracionBateria > 0) {
            document.write( `<div class="alert alert-success" role="alert"> la Laptop ${this.marca} modelo ${this.modelo} con tipo procesador ${this.tipoProcesador} y tipo de disco duro ${this.tipoDiscoDuro} se puede encender`);
        } else {
            document.write("--------------------");
            document.write( `<div class="alert alert-success" role="alert"> la Laptop ${this.marca} modelo ${this.modelo} con tipo procesador ${this.tipoProcesador} y tipo de disco duro ${this.tipoDiscoDuro} no se puede encender`);
        }
    }
}

// Instanciando la subclase Laptop
let objetoLaptop = new Laptop('Lenovo', 'Lenovo IdeaPad', 'Intel Celeron N4500', 'Intel UHD Graphics');
objetoLaptop.registrar();
objetoLaptop.encender();

