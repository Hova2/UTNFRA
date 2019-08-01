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
var Mascota = /** @class */ (function (_super) {
    __extends(Mascota, _super);
    function Mascota(id, tipo, patas, nombre, edad) {
        var _this = _super.call(this, id, tipo, patas) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        return _this;
    }
    return Mascota;
}(Animal));
