//Defino clase
class Carro {

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
        document.write("<h3>Carro Movil</h3><br>")
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
    let gasolina = parseInt(prompt("Digite la cantidad de gasolina del carro: "));
    //Evaluamos si tiene gasolina el carro
    if (gasolina > 0){
        document.write("El carro : " +this.nombre + " Se puede encender <br>");
        document.write(`|||||||| ${gasolina} $ de gasolina <br>`);
        document.write(`<hr>`)
    } else{
        document.write("El carro : " +this.nombre + " no se puede encender <br>");
        document.write(`|||||||| ${gasolina} $ de gasolina<br>`);
        document.write(`<hr>`)
    }
    
    }

}
//Creacion de objetos por medio de instanciar la clase carro
let carro1 = new Carro("Chevrolet ONIX Turbo", "Chevrolet", "5", "5350", "5A3BB")
let carro2 = new Carro("The niro", "Kia", "9", "6590 ", "6C4HA")
let carro3 = new Carro("Hilux", "Toyota", "10", "7897", "7ABCC")

//Mostrar los detalles de cada objeto
carro1.mostrarDetalles()
carro1.encender()
carro2.mostrarDetalles()
carro2.encender()
carro3.mostrarDetalles()
carro3.encender()