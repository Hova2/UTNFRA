$(document).ready(asignarManejadores);
$(document).ready(traerLegisladores);
var ultimoId;
if (localStorage.length == 0) {
    ultimoId = 1;
}
else {
    ultimoId = Number(localStorage.getItem(String(0)));
}
function asignarManejadores() {
    $('#btnSetLegislador').click(altaLegisladores);
    $('#chkId').change(traerLegisladores);
    $('#chkNombre').change(traerLegisladores);
    $('#chkApellido').change(traerLegisladores);
    $('#chkEmail').change(traerLegisladores);
    $('#chkEdad').change(traerLegisladores);
    $('#chkSexo').change(traerLegisladores);
    $('#chkTipo').change(traerLegisladores);
    $('#chkTipo').change(traerLegisladores);
    $('#btnFiltrarTipo').click(traerLegisladores);
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
function traerLegisladores() {
    var legisladores = new Array();
    for (var i = 1; i <= localStorage.length - 1; i++) {
        legisladores.push(JSON.parse(localStorage.getItem(String(i))));
    }
    var legisladoresFiltroUno = legisladores.filter(function (elemento) {
        var tipo = $('#selectTipo option:selected').text();
        console.log(tipo);
        if (tipo == 'Diputado') {
            return elemento;
        }
        else if (tipo == 'Senador') {
            return elemento;
        }
        else if (tipo == 'Todos') {
            return elemento;
        }
    });
    var legisladoresFiltrados = legisladoresFiltroUno.filter(function (elemento) {
        if ($("#chkId").prop('checked')) {
            delete elemento['id'];
        }
        if ($("#chkNombre").prop('checked')) {
            delete elemento['nombre'];
        }
        if ($("#chkApellido").prop('checked')) {
            delete elemento['apellido'];
        }
        if ($("#chkEmail").prop('checked')) {
            delete elemento['email'];
        }
        if ($("#chkEdad").prop('checked')) {
            delete elemento['edad'];
        }
        if ($("#chkSexo").prop('checked')) {
            delete elemento['sexo'];
        }
        if ($("#chkTipo").prop('checked')) {
            delete elemento['tipo'];
        }
        return elemento;
    });
    if (legisladoresFiltrados.length > 0) {
        crearTabla(legisladoresFiltrados);
    }
    else {
        var mensaje = $('<h1>');
        var contenedor = $('#contenedor');
        mensaje.text('No hay legisladores para mostrar');
        contenedor.empty();
        contenedor.append(mensaje);
    }
}
function altaLegisladores() {
    var id = ultimoId;
    var nombre = $("#formLegisladores").find('input[id=inputNombre]').val();
    var apellido = $("#formLegisladores").find('input[id=inputApellido]').val();
    var email = $("#formLegisladores").find('input[id=inputEmail]').val();
    var edad = $("#formLegisladores").find('input[id=inputEdad]').val();
    var sexo = $("#formLegisladores").find('input[name=inputSexo]:checked').val();
    var tipo = $("#formLegisladores").find('input[name=inputLegislador]:checked').val();
    var tipolegislador;
    switch (tipo) {
        case 'diputado':
            tipolegislador = TipoLegislador.diputado;
            break;
        case 'senador':
            tipolegislador = TipoLegislador.senador;
            break;
    }
    var legislador = new Legislador(Number(id), String(nombre), String(apellido), String(email), Number(edad), String(sexo), tipolegislador);
    localStorage.setItem(String(ultimoId), JSON.stringify(legislador));
    ultimoId++;
    localStorage.setItem(String(0), String(ultimoId));
}
