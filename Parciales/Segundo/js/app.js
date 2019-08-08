$(document).ready(asignarManejadores);
$(document).ready(traerLegisladores);
var ultimoId = 1;
function asignarManejadores() {
    $('#formLegisladores').attr('onsubmit', 'return altaLegisladores()');
    $('#formLegisladores').submit(prevenirReload);
    $('#chkId').change(traerLegisladores);
    $('#chkNombre').change(traerLegisladores);
    $('#chkApellido').change(traerLegisladores);
    $('#chkEmail').change(traerLegisladores);
    $('#chkEdad').change(traerLegisladores);
    $('#chkSexo').change(traerLegisladores);
    $('#chkTipo').change(traerLegisladores);
    $('#selectTipo').change(traerLegisladores);
    $('#btnDelLocalStore').click(limpiarLocalStore);
    $('#btnCancLegislador').click(limpiarFormuladio);
    $('#btnDelLegislador').click(eliminarLegisladores);
    $('#rowId').hide();
    $('#btnModLegislador').hide();
    $('#btnDelLegislador').hide();
    $('#btnCancLegislador').hide();
}
function crearTabla(arregloDatos, arregloDatosFiltrados) {
    var tabla = $('<table>');
    var divResponsive = $('<div>');
    var contenedor = $('#contenedor');
    var indices = Object.keys(arregloDatosFiltrados[0]);
    var tr = $('<tr>');
    tabla.append(tr);
    tabla.addClass("table table-striped table-hover table-bordered table-dark");
    divResponsive.addClass("table-responsive");
    indices.forEach(function (dato) {
        var th = $('<th>');
        th.append(dato);
        tr.append(th);
    });
    var cont = 0;
    arregloDatosFiltrados.forEach(function (dato) {
        var tr = $('<tr>');
        tr.click(habilitarCambios);
        var tdid = $('<td>');
        tdid.hide();
        tdid.append(arregloDatos[cont]['id']);
        tr.append(tdid);
        indices.forEach(function (elemento) {
            var td = $('<td>');
            td.append(dato[elemento]);
            tr.append(td);
        });
        cont++;
        tabla.append(tr);
    });
    divResponsive.append(tabla);
    contenedor.empty();
    contenedor.append(divResponsive);
}
function traerLegisladores() {
    var legisladores = new Array();
    for (var i = 1; i < ultimoId; i++) {
        var legislador = JSON.parse(localStorage.getItem(String(i)));
        if (legislador) {
            legisladores.push(legislador);
        }
    }
    var legisladoresFiltroUno = legisladores.filter(function (elemento) {
        var tipo = $('#selectTipo option:selected').text();
        var tipolegislador;
        switch (tipo) {
            case 'Diputado':
                tipolegislador = TipoLegislador.diputado;
                break;
            case 'Senador':
                tipolegislador = TipoLegislador.senador;
                break;
            case 'Todos':
                tipolegislador = 'Todos';
                break;
        }
        if (tipolegislador == elemento['tipo']) {
            return elemento;
        }
        else if (tipolegislador == 'Todos') {
            return elemento;
        }
    });
    var legisladoresFiltroUnoCopia = JSON.parse(JSON.stringify(legisladoresFiltroUno));
    calcularPromedios(legisladoresFiltroUnoCopia);
    var legisladoresFiltrados = legisladoresFiltroUno.map(function (elemento) {
        if (!$("#chkId").prop('checked')) {
            delete elemento['id'];
        }
        if (!$("#chkNombre").prop('checked')) {
            delete elemento['nombre'];
        }
        if (!$("#chkApellido").prop('checked')) {
            delete elemento['apellido'];
        }
        if (!$("#chkEmail").prop('checked')) {
            delete elemento['email'];
        }
        if (!$("#chkEdad").prop('checked')) {
            delete elemento['edad'];
        }
        if (!$("#chkSexo").prop('checked')) {
            delete elemento['sexo'];
        }
        if (!$("#chkTipo").prop('checked')) {
            delete elemento['tipo'];
        }
        return elemento;
    });
    if (legisladoresFiltrados.length > 0) {
        crearTabla(legisladoresFiltroUnoCopia, legisladoresFiltrados);
    }
    else {
        var mensaje = $('<p>');
        var contenedor = $('#contenedor');
        mensaje.text('No hay legisladores para mostrar');
        mensaje.addClass("h1");
        contenedor.empty();
        contenedor.append(mensaje);
    }
}
function limpiarFormuladio() {
    $("#formLegisladores").trigger('reset');
    deshabilitarCambios();
    traerLegisladores();
}
function limpiarLocalStore() {
    localStorage.clear();
    ultimoId = 1;
    deshabilitarCambios();
    traerLegisladores();
}
function altaLegisladores() {
    var nombre = $('#inputNombre').val();
    var apellido = $('#inputApellido').val();
    var email = $('#inputEmail').val();
    var edad = $('#inputEdad').val();
    var sexo = $('[name=inputSexo]:checked').val();
    var tipo = $('[name=inputLegislador]:checked').val();
    var tipolegislador;
    switch (tipo) {
        case 'diputado':
            tipolegislador = TipoLegislador.diputado;
            break;
        case 'senador':
            tipolegislador = TipoLegislador.senador;
            break;
    }
    var legislador = new Legislador(Number(ultimoId), String(nombre), String(apellido), String(email), Number(edad), String(sexo), tipolegislador);
    localStorage.setItem(String(ultimoId), JSON.stringify(legislador));
    ultimoId++;
    limpiarFormuladio();
}
function modificarLegisladores() {
    var id = $('#inputId').val();
    var nombre = $('#inputNombre').val();
    var apellido = $('#inputApellido').val();
    var email = $('#inputEmail').val();
    var edad = $('#inputEdad').val();
    var sexo = $('[name=inputSexo]:checked').val();
    var tipo = $('[name=inputLegislador]:checked').val();
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
    localStorage.setItem(String(id), JSON.stringify(legislador));
    limpiarFormuladio();
}
function eliminarLegisladores() {
    var id = $('#inputId').val();
    localStorage.removeItem(String(id));
    limpiarFormuladio();
}
function calcularPromedios(legisladores) {
    var cantidadLegisladores = legisladores.reduce(function (previo) {
        return previo + 1;
    }, 0);
    console.log(cantidadLegisladores);
    var totalEdad = legisladores.reduce(function (previo, actual) {
        var resultado;
        if (previo == 0) {
            resultado = actual.edad;
        }
        else {
            resultado = previo + actual.edad;
        }
        return resultado;
    }, 0);
    var filtroMujeres = legisladores.filter(function (elemento) {
        if (elemento.sexo == 'Mujer') {
            return elemento;
        }
    });
    var cantidadMujeres = filtroMujeres.reduce(function (previo) {
        return previo + 1;
    }, 0);
    var promEdad = totalEdad / cantidadLegisladores;
    if (promEdad > 0) {
        $("#inputPromedioEdad").val(parseFloat(String(promEdad)).toFixed(2));
    }
    else {
        $("#inputPromedioEdad").val(0);
    }
    var promMSH = cantidadMujeres / cantidadLegisladores;
    if (promMSH > 0) {
        $("#inputPromedioMSH").val(parseFloat(String(promMSH * 100)).toFixed(2));
    }
    else {
        $("#inputPromedioMSH").val(0);
    }
}
function prevenirReload(evento) {
    evento.preventDefault();
}
function habilitarCambios() {
    $('#btnSetLegislador').hide(1000);
    $('#btnModLegislador').show(1000);
    $('#btnDelLegislador').show(1000);
    $('#btnCancLegislador').show(1000);
    $('#rowId').show(1000);
    $('#formLegisladores').attr('onsubmit', 'return modificarLegisladores()');
    var legislador = JSON.parse(localStorage.getItem(String(this.childNodes[0].textContent)));
    $('#inputId').val(legislador.id);
    $('#inputNombre').val(legislador.nombre);
    $('#inputApellido').val(legislador.apellido);
    $('#inputEmail').val(legislador.email);
    $('#inputEdad').val(legislador.edad);
    console.log();
    switch (legislador.sexo) {
        case 'Hombre':
            $('#inputHombre').prop('checked', true);
            $('#labelHombre').addClass("active");
            $('#labelMujer').removeClass("active");
            break;
        case 'Mujer':
            $('#inputMujer').prop('checked', true);
            $('#labelMujer').addClass("active");
            $('#labelHombre').removeClass("active");
            break;
    }
    switch (legislador.tipo) {
        case 'Diputado':
            $('#inputDiputado').prop('checked', true);
            $('#labelDiputado').addClass('active');
            $('#labelSenador').removeClass('active');
            break;
        case 'Senador':
            $('#inputSenador').prop('checked', true);
            $('#labelSenador').addClass('active');
            $('#labelDiputado').removeClass('active');
            break;
    }
}
function deshabilitarCambios() {
    $('#btnSetLegislador').show(1000);
    $('#rowId').hide(1000);
    $('#btnModLegislador').hide(1000);
    $('#btnDelLegislador').hide(1000);
    $('#btnCancLegislador').hide(1000);
    $('#formLegisladores').attr('onsubmit', 'return altaLegisladores()');
}
