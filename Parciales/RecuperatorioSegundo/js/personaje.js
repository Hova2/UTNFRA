var personajeheroe;
(function (personajeheroe) {
    var Personaje = /** @class */ (function () {
        function Personaje(id, nombre, edad) {
            this.id = id;
            this.nombre = nombre;
            this.edad = edad;
        }
        return Personaje;
    }());
    personajeheroe.Personaje = Personaje;
})(personajeheroe || (personajeheroe = {}));
