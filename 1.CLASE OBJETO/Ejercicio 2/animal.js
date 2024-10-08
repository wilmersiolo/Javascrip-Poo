//Defino clase
class Animal {

    //Metodo constructor
    constructor(nombre,tipo_de_animal,color){
        this.nombre = nombre  //Propiedades para la instancia
        this.tipo_de_animal = tipo_de_animal
        this.color = color
 
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Animal</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Tipo de animal: "+this.tipo_de_animal+"<br>")
        document.write("Color: "+this.color+"<br>")
        document.write("<hr>")

    }



}

// Crear los objetos instanciando la clase Animal
let animal1 = new Animal("Burro", "Mamífero", "Gris");
let animal2 = new Animal("Gato", "Mamífero", "Gris");
let animal3 = new Animal("Perro", "Mamífero carnívoro", "Negro");

// Mostrar los detalles de cada objeto y ejecutar los métodos
animal1.mostrarDetalles();
animal2.mostrarDetalles();
animal3.mostrarDetalles();

