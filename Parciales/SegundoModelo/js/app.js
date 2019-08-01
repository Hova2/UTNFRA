$(document).ready(asignarManejadores);
$(document).ready(traerMascotas);
var ultimoId;
if (localStorage.length == 0) {
    ultimoId = 1;
}
else {
    ultimoId = Number(localStorage.getItem(String(0)));
}
function asignarManejadores() {
    $('#btnSetMascota').click(altaMascota);
}
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
        indices.forEach(function (elemento) {
            var td = $('<td>');
            td.append(dato[elemento]);
            tr.append(td);
        });
        tabla.append(tr);
    });
    contenedor.empty();
    contenedor.append(tabla);
}
function traerMascotas() {
    var mascotas = new Array();
    for (var i = 1; i <= localStorage.length - 1; i++) {
        mascotas.push(JSON.parse(localStorage.getItem(String(i))));
    }
    if (mascotas.length > 0) {
        crearTabla(mascotas);
    }
    else {
        var mensaje = $('<h1>');
        var contenedor = $('#contenedor');
        mensaje.text('No hay mascotas para mostrar');
        contenedor.empty();
        contenedor.append(mensaje);
    }
}
function altaMascota() {
    var id = ultimoId;
    var nombre = $("#formMascotas").find('input[id=inputNombre]').val();
    var edad = $("#formMascotas").find('input[id=inputEdad]').val();
    var patas = $("#formMascotas").find('input[id=inputPatas]').val();
    var tipo = $("#formMascotas").find('select[id=selectTipo] option:selected').text();
    var tipoanimal;
    switch (tipo) {
        case 'Reptil':
            tipoanimal = TipoAnimal.reptil;
            break;
        case 'Ave':
            tipoanimal = TipoAnimal.ave;
            break;
        case 'Roedor':
            tipoanimal = TipoAnimal.roedor;
            break;
        case 'Felino':
            tipoanimal = TipoAnimal.felino;
            break;
    }
    var mascota = new Mascota(id, tipoanimal, Number(patas), String(nombre), Number(edad));
    localStorage.setItem(String(ultimoId), JSON.stringify(mascota));
    ultimoId++;
    localStorage.setItem(String(0), String(ultimoId));
}
