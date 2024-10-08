//Defino clase
class Figuras {

    //Metodo constructor
    constructor(nombre,forma,n_lados,angulo,area){
        this.nombre = nombre  //Propiedades para la instancia
        this.forma = forma
        this.n_lados = n_lados
        this.angulo = angulo
        this.area = area
        
    }

    //Metodo parta mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Figura geometrica</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Forma: "+this.forma+"<br>")
        document.write("Numero de lados: "+this.n_lados+"<br>")
        document.write("Angulo: "+this.angulo+"<br>")
        document.write("Area: "+this.area+"<br>")
        document.write("<hr>")

    }



}
//Creacion de objetos por medio de instanciar la clase figura geometrica
let figura1 = new Figuras("Triangulo", "Triangular", "3", "8°", "5 cm")
let figura2 = new Figuras("Cuadrado", "Cuadrada", "4", "90°", "9 cm")
let figura3 = new Figuras("Rectangulo", "Rectangular", "4", "11°", "13 cm")

//Mostrar los detalles de cada objeto
figura1.mostrarDetalles()
figura2.mostrarDetalles()
figura3.mostrarDetalles()