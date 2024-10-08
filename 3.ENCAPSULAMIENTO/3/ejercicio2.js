class Libro {
    // método constructor
    constructor(titulo, autor, editorial) {
        this._titulo = titulo; // privado
        this._autor = autor;   // privado
        this.editorial = editorial; // público
    }

    // método getter para título
    obtenerTitulo() {
        return this._titulo;
    }

    // método getter para autor
    obtenerAutor() {
        return this._autor;
    }

    // método setter para título
    establecerTitulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    // método setter para autor
    establecerAutor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    // método para mostrar detalles del libro
    mostrarDetalles() {
        document.write(`Título: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
    }
}

// Crear un objeto de la clase Libro
const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "Editorial Sudamericana");

// Mostrar detalles del libro
libro.mostrarDetalles();

document.write("<hr>");

// Modificar atributos encapsulados usando setters y obtenerlos con getters
libro.establecerTitulo("El amor en los tiempos del cólera"); // setter
document.write(`Título: ${libro.obtenerTitulo()} <br>`); // getter
libro.establecerAutor("Gabriel García Márquez"); // setter
document.write(`Autor: ${libro.obtenerAutor()} <br>`); // getter
document.write(`Editorial: ${libro.editorial} <br>`); // público


