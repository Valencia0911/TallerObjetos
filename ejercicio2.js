function Mascota(nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie= especie;
    this.edad=edad;
    this.peso=peso;


    this.presentarse=function(){
        return ` Mi nombre es: ${this.nombre} mi especie es: ${this.especie} mi edad es:  ${this.edad} años y peso: ${this.peso} kilos`;
    }
}

const mascota1=new Mascota("Alaska","Husky",3,15);
const mascota2=new Mascota("Apolo","Criollo",2,10);
const mascota3=new Mascota("Negra","Criollo",16,22);

console.log(mascota3.presentarse());
