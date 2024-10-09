class FormaGeometrica {
    // Método abstracto
    calcularArea() {
        throw new Error("Este método debe ser implementado por una subclase");
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases
let cuadrado = new Cuadrado(5);
document.write("------------------------------------------------ <br/>")
document.write("<b>CUADRADO :</b> <br/>");
document.write(`Área del cuadrado: ${cuadrado.calcularArea()}`);
document.write("<br/>")
document.write("------------------------------------------------ <br/>")


let circulo = new Circulo(3);
document.write("------------------------------------------------ <br/>")
document.write("<b>CIRCULO :</b> <br/>");
document.write(`Área del círculo: ${circulo.calcularArea()}`);
document.write("<br/>")
document.write("------------------------------------------------ <br/>")

