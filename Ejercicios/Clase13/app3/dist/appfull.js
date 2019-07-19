var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Nasa = /** @class */ (function () {
    function Nasa(director, creacion) {
        this.director = director;
        this.creacion = creacion;
        this.cohetes = [];
    }
    Nasa.prototype.agregarCohete = function (rocket) {
        this.cohetes.push(rocket);
    };
    Nasa.prototype.lanzarCohete = function (rocket) {
        rocket.launch();
    };
    return Nasa;
}());
var Subsidiaria = /** @class */ (function (_super) {
    __extends(Subsidiaria, _super);
    function Subsidiaria(director, creacion, nombre) {
        var _this = _super.call(this, director, creacion) || this;
        _this.nombre = nombre;
        return _this;
    }
    return Subsidiaria;
}(Nasa));
var Destinos;
(function (Destinos) {
    Destinos["marte"] = "Marte";
    Destinos["luna"] = "Luna";
})(Destinos || (Destinos = {}));
var laNasa = new Nasa("Juan Smit", 1945);
var unCuete = new Cohete("Apolo 11", 100000000);
laNasa.agregarCohete(unCuete);
laNasa.lanzarCohete(unCuete);
