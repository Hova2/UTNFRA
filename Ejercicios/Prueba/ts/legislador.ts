class Legislador extends Persona{
    tipo:TipoLegislador;

    constructor(id:Number, nombre:String, apellido:String, email:String, edad:Number, sexo:String, tipo:TipoLegislador){
        super(id,nombre,apellido,email,edad,sexo);
        this.tipo=tipo;
    }
}