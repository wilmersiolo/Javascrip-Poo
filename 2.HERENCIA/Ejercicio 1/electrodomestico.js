class Electrodomestico {
    // Constructor
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumoElectrico = parseInt(prompt("Digite el consumo eléctrico del electrodoméstico en (KWh): "));
    }

    // Método público para registrar el electrodoméstico
    registrar() {
        document.write("<hr>")
        document.write(" <div class=`alert alert-primary` role=`alert`>ELECTRODOMÉSTICO REGISTRADO");
        document.write("Marca:",this.marca, "<br>");
        document.write("Color: ",this.color,"<br>");
        document.write("Capacidad:" ,this.capacidad,"<br>");
        document.write("Consumo eléctrico:" ,this.consumoElectrico ,"KWh","<br>");
    }
}

class Refrigerador extends Electrodomestico {
    // Constructor
    constructor(marca, color, capacidad) {
        super(marca, color, capacidad); // Llamada al constructor de la superclase
        this.tipoRefrigerador = prompt("Digite el tipo de refrigerador (Frost o No Frost): ");
        this.temperatura = parseFloat(prompt("Digite la temperatura inicial del electrodoméstico (°C): "));
    }

    // Método para ajustar la temperatura
    ajustarTemp() {
        document.write(`Tipo de refrigerador: ${this.tipoRefrigerador} <br>`);

        if (this.temperatura > 32) {
            document.write("<hr>")
            document.write(` <div class="alert alert-success" role="alert">  El electrodoméstico ${this.marca}, con color ${this.color} y capacidad ${this.capacidad} tiene una temperatura adecuada y se puede encender.`);
        } else {
            document.write(`<div class="alert alert-succes" role="alert"> El electrodoméstico ${this.marca}, con color ${this.color} y capacidad ${this.capacidad} necesita ajustar la temperatura para poder encender.`);
        }
    }
}

// Instanciando la subclase Refrigerador
let objetoRefrigerador = new Refrigerador('Haceb', 'Rojo', '428 Lit');
objetoRefrigerador.registrar();
objetoRefrigerador.ajustarTemp();


