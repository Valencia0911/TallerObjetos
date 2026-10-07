const prompt = require('prompt-sync')();

function Vehiculo(marca,modelo,placa,color,precio,kilometraje){
    this.marca=marca;
    this.modelo=modelo
    this.placa=placa;
    this.color=color
    this.precio=precio
    this.kilometraje=kilometraje

    this.informacionVehiculo=function(){
    return ` Mi vehiculo es de la marca: ${this.marca} de color ${this.color} y modelo ${this.modelo} con placa ${this.placa}`;
    }

    this.modificarPrecio=function(){
        if(this.precio>50000000 && this.modelo >= 2024 && this.modelo <= 2026){
           this.precio=this.precio *0.85
            return `Tu nuevo precio es: ${this.precio}`
        } else if(this.precio>50000000 && this.modelo < 2024 ){
            this.precio=this.precio*0.95
            return `Tu nuevo precio es: ${this.precio}`
        }else{
            return "No hay descuento"
        }

    }

    this.revisarKilometraje=function(){
        if(this.kilometraje===0){
            return "Es un vehiculo cero kilometrosss"
        }else if(this.kilometraje<30000){
            return "Es un vehiculo con bajo kilometraje"

        }else if(this.kilometraje >= 30000 && this.kilometraje <= 100000){
            return "Es  un vehiculo con kilometraje normal"
        }else{
            return "Es un vehiculo con alto kilometraje"
        }
    }

}

const vehiculo1=new Vehiculo(
    prompt("Ingrese la marca de su vehiculo: "),
    Number(prompt("Ingrese el modelo de su vehiculo: ")),
    prompt("Ingrese la placa de su vehiculo: "),
    prompt("Ingrese el color de su vehiculo: "),
    Number(prompt("Ingrese el precio de su vehiculo: ")),
    Number(prompt("Ingrese el kilometraje de su vehiculo: "))
)

/*const vehiculo2=new Vehiculo(
    prompt("Ingrese la marca de su vehiculo: "),
    Number(prompt("Ingrese el modelo de su vehiculo: ")),
    prompt("Ingrese la placa de su vehiculo: "),
    prompt("Ingrese el color de su vehiculo: "),
    Number(prompt("Ingrese el precio de su vehiculo: ")),
    Number(prompt("Ingrese el kilometraje de su vehiculo: "))
)

//const vehiculo3=new Vehiculo(
    prompt("Ingrese la marca de su vehiculo: "),
    Number(prompt("Ingrese el modelo de su vehiculo: ")),
    prompt("Ingrese la placa de su vehiculo: "),
    prompt("Ingrese el color de su vehiculo: "),
    Number(prompt("Ingrese el precio de su vehiculo: ")),
    Number(prompt("Ingrese el kilometraje de su vehiculo: "))
)*/

console.log(vehiculo1.informacionVehiculo())
console.log(vehiculo1.modificarPrecio());
console.log(vehiculo1.revisarKilometraje());