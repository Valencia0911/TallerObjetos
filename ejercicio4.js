function Libro(nombre,autor,editorial,){
    this.nombre=nombre;
    this.autor=autor;
    this.editorial=editorial;
    this.prestado= false;

    this.prestar=function(){
        if(this.prestado === false){    
            this.prestado=true
            return "Libro prestado"
        }
        else{
            return "El libro ya está prestado"
        }
    }

    this.devolver=function(){
        if(this.prestado===true){
            this.prestado=false;
            return "Libro recibido"
        }else{
            return "El libro no está prestado"
        }

    }

}

const libro1=new Libro("EL niño que enloqueció de amor","Eduardo Barrios","Heraclio Fernández", "Prestado");
const libro2=new Libro("Arsène Lupin, caballero ladrón","Maurice Leblanc","Editorial Alma", "Disponible");

console.log(libro1.prestar());
console.log(libro1.devolver());
console.log(libro2.prestar());
console.log(libro2.devolver());

