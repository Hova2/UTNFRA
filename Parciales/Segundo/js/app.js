$(document).ready(traerMascotas);
function crearTabla(arregloDatos) {
    var tabla = $('<table>');
    var contenedor = $('#contenedor');
    var indices = Object.keys(arregloDatos[0]);
    var tr = $('<tr>');
    tabla.append(tr);
    tabla.addClass("tablas");
    indices.forEach(function (dato) {
        var th = $('<th>');
        th.append(dato);
        tr.append(th);
    });
    arregloDatos.forEach(function (dato) {
        var tr = $('<tr>');
        //tr.click(formulario);
        Object.values(dato).forEach(function (dato2) {
            var td = $('<td>');
            td.append(dato2);
            tr.append(td);
        });
    });
    contenedor.empty();
    contenedor.append(tabla);
}
function traerMascotas() {
    var personajes = new Array();
    if (personajes.length > 0) {
        crearTabla(personajes);
    }
    else {
        var mensaje = $('<h1>');
        var contenedor = $('#contenedor');
        mensaje.text('No hay mascotas para mostrar');
        contenedor.empty();
        contenedor.append(mensaje);
    }
}
