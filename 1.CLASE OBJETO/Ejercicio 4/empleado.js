//Defino clase
class Empleados {

    //Metodo constructor
    constructor(nombre,trabajo,peso,estatura,edad){
        this.nombre = nombre  //Propiedades para la instancia
        this.trabajo = trabajo
        this.peso = peso
        this.estatura = estatura
        this.edad = edad
        
    }

    //Metodo parta mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Empleado</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Trabajo: "+this.trabajo+"<br>")
        document.write("Peso: "+this.peso+"<br>")
        document.write("Estatura de chasis: "+this.estatura+"<br>")
        document.write("Edad: "+this.edad+"<br>")
        document.write("<hr>")

    }



}
//Creacion de objetos por medio de instanciar la clase empleado
let empleado1 = new Empleados("Maria peñate rivera", "Enfermera", "51 kg", "1.72 cm", "32 años")
let empleado2 = new Empleados("Wilmer jose", "Desarrollador de Software", "50 kg", "1.67 cm ", "20 años")
let empleado3 = new Empleados("Claudia patricia", "Odontologa", "51 kg", "1.65 cm", "37 años")

//Mostrar los detalles de cada objeto
empleado1.mostrarDetalles()
empleado2.mostrarDetalles()
empleado3.mostrarDetalles()
