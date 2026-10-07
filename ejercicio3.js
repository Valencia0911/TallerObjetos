function Estudiante(nombre,apellido,grado,nota){
    this.nombre=nombre;
    this.apellido=apellido;
    this.grado=grado;
    this.nota=nota;

    this.mostrarResultado=function(){
        if(this.nota>=3.0){
            return "Aprobado"
        }else{ 
            return "Perdiste"
        }
    }
}

const estudiante1=new Estudiante("Maria Isabel", "Aristizabal Sarrazola", 11, 5.0);
const estudiante2=new Estudiante("Cristian David", "Valencia Mora", 10, 2.0);
const estudiante3=new Estudiante("Kevin Andres", "Jaramillo Londoño", 11, 3.0);
const estudiante4=new Estudiante("Julian Danilo", "Arcila Gomez", 10, 4.5);

console.log(estudiante2.mostrarResultado())