var Cohete = /** @class */ (function () {
    function Cohete(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.destinos = Destinos.luna;
    }
    Cohete.prototype.launch = function () {
        console.log("Lanzando el cochete " + this.nombre + " a la " + this.destinos);
    };
    return Cohete;
}());
