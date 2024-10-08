//Defino clase
class Celular {

    //Metodo constructor
    constructor(nombre,marca,imei,bacteria,camara){
        this.nombre = nombre  //Propiedades para la instancia
        this.marca = marca
        this.imei = imei
        this.bacteria = bacteria
        this.camara = camara
        
    }

    //Metodo parta mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Dispositivo Movil</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Marca: "+this.marca+"<br>")
        document.write("Imei: "+this.imei+"<br>")
        document.write("Bacteria: "+this.bacteria+"<br>")
        document.write("Camara: "+this.camara+"<br>")
        document.write("<hr>")

    }

    //Metodo para encerder el celular
   encender(){
    //Atributo privado solo para el metodo encerder
    let energia = parseInt(prompt("Digite el valor de la carga: "));
    //Evaluamos si tiene carga el celular
    if (energia > 0){
        document.write("El celular : " +this.nombre + " Se puede encender <br>");
        document.write(`|||||||| ${energia} % de carga <br>`);
        document.write(`<hr>`)
    } else{
        document.write("El celular : " +this.nombre + " no se puede encender <br>");
        document.write(`|||||||| ${energia} % de carga <br>`);
        document.write(`<hr>`)
    }
    
    }

}
//Creacion de objetos por medio de instanciar la clase celular
let celular1 = new Celular("Motorola G84", "Motorola", "1102890", "4000 mah", "64mpx")
let celular2 = new Celular("Samsung Galaxy S24", "Samsung", "342480", "6000 mah", "200mpx")
let celular3 = new Celular("Nokia G50", "Nokia", "1134590", "4000 mah", "48mpx")

//Mostrar los detalles de cada objeto
celular1.mostrarDetalles()
celular1.encender()
celular2.mostrarDetalles()
celular2.encender()
celular3.mostrarDetalles()
celular3.encender()

