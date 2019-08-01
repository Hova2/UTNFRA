class Mascota extends Animal{
    nombre:string;
    edad:number;

    constructor(id:number, tipo:TipoAnimal, patas:number, nombre:string, edad:number){
        super(id, tipo, patas);
        this.nombre=nombre;
        this.edad=edad;
    }
}