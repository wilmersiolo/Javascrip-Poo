class Instrumento {
    // Constructor
    constructor(tipoInstrumento, marca, materialFabricacion) {
        this.tipoInstrumento = tipoInstrumento;
        this.marca = marca;
        this.materialFabricacion = materialFabricacion;
        this.precio = parseInt(prompt("Digite el precio del instrumento: "));
    }

    // Método público para registrar el instrumento
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>INSTRUMENTO REGISTRADO </div> <br>");
        document.write("Tipo de instrumento:",this.tipoInstrumento,"<br>");
        document.write("Marca:" ,this.marca,"<br>");
        document.write("Material de fabricación: ",this.materialFabricacion,"<br>");
    }
}

class Guitarra extends Instrumento {
    // Constructor
    constructor(tipoInstrumento, marca, materialFabricacion, numeroCuerdas) {
        super(tipoInstrumento, marca, materialFabricacion); // Llamada al constructor de la superclase
        this.numeroCuerdas = numeroCuerdas;
        this.acorde = prompt("Digite los acordes básicos de los cuales tiene conocimiento: ");
    }

    // Método para simular tocar los acordes
    tocarGuitarra() {
        document.write("<hr>");
        let acordes = this.acorde;
        if (acordes) {
            document.write(`<div class="alert alert-success" role="alert">Simulando el toque de guitarra...`);
            document.write(`<div class="alert alert-success" role="alert">¡Terminaste de tocar!`);
        } else {
            document.write(`<div class="alert alert-success" role="alert">No se ingresaron acordes.`);
        }
    }
}
        

// Instanciando la subclase instrumento
let objetoInstrumento = new Guitarra('Acordeón', 'Cantabella', 'Madera', '185 Teclas(Graves) y 45 Teclas(Agudos)');
objetoInstrumento.registrar();
objetoInstrumento.tocarGuitarra();
