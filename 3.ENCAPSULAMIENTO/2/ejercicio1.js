class Producto {
    // método constructor
    constructor(nombre, precio, cantidad, categoria) {
        this._nombre = nombre; // privado
        this._precio = precio; // privado
        this.cantidad = cantidad; // público
        this.categoria = categoria; // público
    }

    // método getter para nombre
    obtenerNombre() {
        return this._nombre;
    }

    // método getter para precio
    obtenerPrecio() {
        return this._precio;
    }

    // método setter para nombre
    establecerNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // método setter para precio
    establecerPrecio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    // método para mostrar detalles del producto
    mostrarDetalles() {
        document.write(`Nombre: ${this._nombre}<br>`);
        document.write(`Precio: ${this._precio}<br>`);
        document.write(`Cantidad: ${this.cantidad}<br>`);
        document.write(`Categoría: ${this.categoria}<br>`);
    }
}

// Crear un objeto de la clase Producto
const producto = new Producto("Laptop", 1500, 20, "Electrónica");

// Mostrar detalles del producto
producto.mostrarDetalles();

document.write("<hr>");

// Modificar atributos encapsulados usando setters y obtenerlos con getters
producto.establecerNombre("Laptop Gamer"); // setter
document.write(`Nombre: ${producto.obtenerNombre()} <br>`); // getter
producto.establecerPrecio(1800); // setter
document.write(`Precio: ${producto.obtenerPrecio()} <br>`); // getter
document.write(`Cantidad: ${producto.cantidad} <br>`); // público
document.write(`Categoría: ${producto.categoria} <br>`); // público





