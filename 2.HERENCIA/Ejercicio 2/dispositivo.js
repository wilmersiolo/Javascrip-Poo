class Dispostivo {
    // Constructor
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.capacidadBateria = parseInt(prompt("Digite la capacidad de la batería del dispositivo (mAh): "));
    }

    // Método público para registrar el dispositivo
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELECTRODOMÉSTICO REGISTRADO </div> <br>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Modelo: ", this.modelo, "<br>");
        document.write("Año: ", this.año, "<br>");
        document.write("Capacidad de batería: ", this.capacidadBateria, " mAh<br>");
    }
}

class Smartphone extends Dispostivo {
    // Constructor
    constructor(marca, modelo, año) {
        super(marca, modelo, año); // Llamada al constructor de la superclase
        this.sistemaOperativo = prompt("Digite el sistema operativo del smartphone (iOS o Android): ");
        this.conectividad = prompt("Digite el tipo de conectividad del smartphone (4G o 5G): ");
    }

    // Método para encender el electrodoméstico
    encender() {
        document.write("<hr>");

        if (this.capacidadBateria > 0) {

            document.write(`<div class="alert alert-success" role="alert"> El smartphone ${this.marca} modelo ${this.modelo} año ${this.año} se puede encender.`);
        } else {
            document.write(`<div class="alert alert-danger" role="alert"> El smartphone ${this.marca} modelo ${this.modelo} año ${this.año} no se puede encender debido a falta de batería.`);
        }
    }
}

// Instanciando la subclase dispositivo
let objetoSmarphone = new Smartphone('Samsung', 'Samsung S24 Ultra','2024');
objetoSmarphone.registrar();
objetoSmarphone.encender();



