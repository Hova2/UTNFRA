namespace espacial{
    export class Cohete{
        nombre:string;
        precio:number;
        destinos:Destinos;

        constructor(nombre:string, precio:number){
            this.nombre=nombre;
            this.precio=precio;
            this.destinos=Destinos.luna;
        }

        launch(){
            console.log(`Lanzando el cochete ${this.nombre} a la ${this.destinos}`);
        }
    }
}