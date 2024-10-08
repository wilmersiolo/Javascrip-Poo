// Clase base Vehiculo
class Vehiculo {
    Descripcion() {
        // Método que será sobrescrito por las clases derivadas
    }
}

// Clase Carro
class Carro extends Vehiculo {
    constructor(marca, año, transmision) {
        super();
        this.marca = marca;
        this.año = año;
        this.transmision = transmision;
    }

    Descripcion() {
        document.write("________________________________________________________________________________________________<br>");
        document.write("CARRO<br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Año: ${this.año}<br>`);
        document.write(`Transmisión: ${this.transmision}<br>`);
        document.write("________________________________________________________________________________________________<br><br>");
    }
}

// Clase Moto
class Moto extends Vehiculo {
    constructor(marca, tipo_motor, potencia) {
        super();
        this.marca = marca;
        this.tipo_motor = tipo_motor;
        this.potencia = potencia;
    }

    Descripcion() {
        document.write("MOTO<br>");
        document.write(`Marca: ${this.marca}<br>`);
        document.write(`Tipo de motor: ${this.tipo_motor}<br>`);
        document.write(`Potencia: ${this.potencia} HP<br>`);
        document.write("________________________________________________________________________________________________<br><br>");
    }
}

// Clase Bicicleta
class Bicicleta extends Vehiculo {
    constructor(tipo, tamaño_rueda, velocidades) {
        super();
        this.tipo = tipo;
        this.tamaño_rueda = tamaño_rueda;
        this.velocidades = velocidades;
    }

    Descripcion() {
        document.write("BICICLETA<br>");
        document.write(`Tipo: ${this.tipo}<br>`);
        document.write(`Tamaño de rueda: ${this.tamaño_rueda} pulgadas<br>`);
        document.write(`Velocidades: ${this.velocidades}<br>`);
        document.write("________________________________________________________________________________________________<br><br>");
    }
}

// Función que utiliza polimorfismo
function mostrarInformacionVehiculo(vehiculo) {
    vehiculo.Descripcion();
}

// Crear instancias de cada clase con atributos
let carro = new Carro("Tesla", 2023, "automática");
let moto = new Moto("Ducati", "bicilíndrico", 150);
let bicicleta = new Bicicleta("urbana", 29, 21);

// Llamar a la función con los nuevos vehículos
mostrarInformacionVehiculo(carro);
mostrarInformacionVehiculo(moto);
mostrarInformacionVehiculo(bicicleta);






