//Defino clase
class Moto {

    //Metodo constructor
    constructor(nombre,marca,n_pasajeros,n_chasis,placa){
        this.nombre = nombre  //Propiedades para la instancia
        this.marca = marca
        this.n_pasajeros = n_pasajeros
        this.n_chasis = n_chasis
        this.placa = placa
        
    }

    //Metodo parta mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Motocicleta movil</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Marca: "+this.marca+"<br>")
        document.write("Numero de pasajeros: "+this.n_pasajeros+"<br>")
        document.write("Numero de chasis: "+this.n_chasis+"<br>")
        document.write("placa: "+this.placa+"<br>")
        document.write("<hr>")

    }

    //Metodo para encerder el celular
   encender(){
    //Atributo privado solo para el metodo encerder
    let gasolina = parseInt(prompt("Digite la cantidad de gasolina de la moto: "));
    //Evaluamos si tiene gasolina la moto
    if (gasolina > 0){
        document.write("La moto : " +this.nombre + " Se puede encender <br>");
        document.write(`|||||||| ${gasolina} $ de gasolina <br>`);
        document.write(`<hr>`)
    } else{
        document.write("La moto : " +this.nombre + " no se puede encender <br>");
        document.write(`|||||||| ${gasolina} $ de gasolina<br>`);
        document.write(`<hr>`)
    }
    
    }

}
//Creacion de objetos por medio de instanciar la clase moto
let moto1 = new Moto("YZF R15", "Yamaha", "2", "019003", "50AH3")
let moto2 = new Moto("YZ 125", "Yamaha", "1", "02809 ", "3AH64")
let moto3 = new Moto("KAWASAKI", "KAWASAKI", "2", "908765", "0H15G")

//Mostrar los detalles de cada objeto
moto1.mostrarDetalles()
moto1.encender()
moto2.mostrarDetalles()
moto2.encender()
moto3.mostrarDetalles()
moto3.encender()