namespace personajeheroe{
    export class Heroe extends Personaje{
        alias:String;
        poder:String;
        tipo:TipoHeroe;

        constructor(id:Number, nombre:String, edad:Number, alias:String, poder:String, tipo:TipoHeroe){
            super(id,nombre,edad);
            this.alias=alias;
            this.poder=poder;
            this.tipo=tipo;
        }
    }
}