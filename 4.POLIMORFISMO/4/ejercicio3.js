// Clase base InstrumentosMusicales
class InstrumentosMusicales {
    Tocar() {
        // Método que será sobrescrito por las clases derivadas
    }
}

// Clase Piano
class Piano extends InstrumentosMusicales {
    constructor(tipo, num_teclas) {
        super();
        this.tipo = tipo;
        this.num_teclas = num_teclas;
    }

    Tocar() {
        document.write("____________________________________________________________________________________________________________________<br>");
        document.write("PIANO<br>");
        document.write(`Tipo: ${this.tipo}<br>`);
        document.write(`Número de teclas: ${this.num_teclas}<br>`);
        document.write("Sonido: ¡Tú tú tú!<br>");
        document.write("____________________________________________________________________________________________________________________<br><br>");
    }
}

// Clase Guitarra
class Guitarra extends InstrumentosMusicales {
    constructor(tipo, num_cuerdas) {
        super();
        this.tipo = tipo;
        this.num_cuerdas = num_cuerdas;
    }

    Tocar() {
        document.write("GUITARRA<br>");
        document.write(`Tipo: ${this.tipo}<br>`);
        document.write(`Número de cuerdas: ${this.num_cuerdas}<br>`);
        document.write("Sonido: ¡Strum strum!<br>");
        document.write("____________________________________________________________________________________________________________________<br><br>");
    }
}

// Clase Batería
class Bateria extends InstrumentosMusicales {
    constructor(tipo, num_tambores) {
        super();
        this.tipo = tipo;
        this.num_tambores = num_tambores;
    }

    Tocar() {
        document.write("BATERÍA<br>");
        document.write(`Tipo: ${this.tipo}<br>`);
        document.write(`Número de tambores: ${this.num_tambores}<br>`);
        document.write("Sonido: ¡Boom boom!<br>");
        document.write("____________________________________________________________________________________________________________________<br><br>");
    }
}

// Función que utiliza polimorfismo
function hacerSonido(instrumento) {
    instrumento.Tocar();
}

// Crear instancias de cada clase con atributos
let piano = new Piano("piano de cola", 88);
let guitarra = new Guitarra("guitarra acústica", 6);
let bateria = new Bateria("batería electrónica", 5);

// Llamar a la función con diferentes tipos de instrumentos
hacerSonido(piano);
hacerSonido(guitarra);
hacerSonido(bateria);







