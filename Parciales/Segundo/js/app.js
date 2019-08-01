$(document).ready(asignarManejadores);
$(document).ready(traerMascotas);
var lastId = 1;
var mascotas = new Array();
function asignarManejadores() {
    $('#btnSetMascota').click(altaMascota);
}
function crearTabla(arregloDatos) {
    console.log(arregloDatos);
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
    for (var i = 1; i != localStorage.length; i++) {
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
    var id = lastId;
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
    console.log(mascota.id);
    localStorage.setItem(String(lastId), JSON.stringify(mascota));
    lastId++;
}
