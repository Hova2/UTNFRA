namespace personajeheroe{
    export class Personaje{
        id:Number;
        nombre:String;
        edad:Number;

        constructor(id:Number, nombre:String, edad:Number){
            this.id=id;
            this.nombre=nombre;
            this.edad=edad;
        }
    }
}