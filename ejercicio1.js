function Computador(marca, procesador, ram, precio){
    this.marca= marca;
    this.procesador=procesador;
    this.ram=ram;
    this.precio=precio;
}

const pc1    = new Computador("Asus","Ryzen 5 7000 series",16,2459900, );
const pc2 = new Computador("HP All-in-One 24-cr0331la","Intel Core i3 N300",8,1899000,);
const pc3    = new Computador("Acer Aspire GO","• Intel Core Ultra 5",16,2499030,);

console.log(pc1);