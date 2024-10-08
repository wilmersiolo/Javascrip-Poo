// Clase base Animal
class Animal {
    Sonido() {
        // Método que será sobrescrito por las clases derivadas
    }
}

// Clase Perro
class Perro extends Animal {
    constructor(raza, tamaño, edad) {
        super();
        this.raza = raza;
        this.tamaño = tamaño;
        this.edad = edad;
    }

    Sonido() {
        document.write("________________________________________________________________________________________________<br>");
        document.write("PERRO<br>");
        document.write(`Raza: ${this.raza}<br>`);
        document.write(`Tamaño: ${this.tamaño}<br>`);
        document.write(`Edad: ${this.edad} años<br>`);
        document.write("Sonido: ¡Guau Guau!<br>");
        document.write("________________________________________________________________________________________________<br><br>");
    }
}

// Clase Gato
class Gato extends Animal {
    constructor(color, pelaje, edad) {
        super();
        this.color = color;
        this.pelaje = pelaje;
        this.edad = edad;
    }

    Sonido() {
        document.write("GATO<br>");
        document.write(`Color: ${this.color}<br>`);
        document.write(`Pelaje: ${this.pelaje}<br>`);
        document.write(`Edad: ${this.edad} años<br>`);
        document.write("Sonido: ¡Miau Miau!<br>");
        document.write("________________________________________________________________________________________________<br><br>");
    }
}

// Clase Pájaro
class Pajaro extends Animal {
    constructor(especie, tamaño, habitat) {
        super();
        this.especie = especie;
        this.tamaño = tamaño;
        this.habitat = habitat;
    }

    Sonido() {
        document.write("PAJARO<br>");
        document.write(`Especie: ${this.especie}<br>`);
        document.write(`Tamaño: ${this.tamaño} cm<br>`);
        document.write(`Hábitat: ${this.habitat}<br>`);
        document.write("Sonido: ¡Pío Pío!<br>");
        document.write("________________________________________________________________________________________________<br><br>");
    }
}

// Función que utiliza polimorfismo
function hacerSonido(animal) {
    animal.Sonido();
}

// Crear instancias de cada clase con atributos
let perro = new Perro("Labrador", "mediano", 3);
let gato = new Gato("blanco", "corto", 2);
let pajaro = new Pajaro("canario", 15, "urbano");

// Llamar a la función con diferentes tipos de animales
hacerSonido(perro);
hacerSonido(gato);
hacerSonido(pajaro);



