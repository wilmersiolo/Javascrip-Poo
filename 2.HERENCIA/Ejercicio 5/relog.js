class Reloj {
    // Constructor
    constructor(marca, material) {
        this.marca = marca;
        this.material = material;
        this.precio = parseInt(prompt("Digite el precio del reloj: "));
    }

    // Método público para registrar el instrumento
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>RELOG REGISTRADO </div> <br>");
        document.write("Marca:",this.marca,"<br>");
        document.write("Material:" ,this.material,"<br>");
        document.write("Precio:" ,this.precio,"<br>")

    }
}

class RelojInteligente extends Reloj {
    // Constructor
    constructor(marca, material, tipoPantalla) {
        super(marca, material); // Llamada al constructor de la superclase
        this.tipoPantalla = tipoPantalla;
        this.sistemaOperativo = prompt("Digite el sistema operativo (ejemplo: Wear OS): ");
    }

    // Método para encender el reloj
    encender() {
        let respuesta = prompt("¿Deseas encender el reloj? (si/no): ");
        if (respuesta.toLowerCase() === "si") {
            document.write(` <div class="alert alert-success" role="alert"> El reloj ${this.marca}, de material ${this.material} con tipo de pantalla ${this.tipoPantalla} se está encendiendo.`);
        } else {
            document.write(` <div class="alert alert-success" role="alert"> El reloj ${this.marca}, de material ${this.material} con tipo de pantalla ${this.tipoPantalla} no se puede encender.`);
        }
    }
}

// Instanciando la subclase RelojInteligente
let objetoReloj = new RelojInteligente('Apple', 'Titanio', 'OLED');
objetoReloj.registrar();
objetoReloj.encender();
