$(document).ready(asignarManejadores);
$(document).ready(traerHeroes);
var ultimoId = JSON.parse(localStorage.getItem(String(0)));
if (!ultimoId) {
    ultimoId = 1;
}
function asignarManejadores() {
    $('#formHeroes').attr('onsubmit', 'return altaHeroes()');
    $('#formHeroes').submit(prevenirReload);
    $('#chkId').change(traerHeroes);
    $('#chkNombre').change(traerHeroes);
    $('#chkAlias').change(traerHeroes);
    $('#chkPoder').change(traerHeroes);
    $('#chkTipo').change(traerHeroes);
    $('#chkEdad').change(traerHeroes);
    $('#selectTipoFiltro').change(traerHeroes);
    $('#btnDelLocalStore').click(limpiarLocalStore);
    $('#btnCancHeroe').click(limpiarFormuladio);
    $('#btnDelHeroe').click(eliminarHeroes);
    $('#rowId').hide();
    $('#btnModHeroe').hide();
    $('#btnDelHeroe').hide();
    $('#btnCancHeroe').hide();
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
function traerHeroes() {
    var heroes = new Array();
    for (var i = 1; i < ultimoId; i++) {
        var heroe = JSON.parse(localStorage.getItem(String(i)));
        if (heroe) {
            heroes.push(heroe);
        }
    }
    var heroesFiltroUno = heroes.filter(function (elemento) {
        var tipo = $('#selectTipoFiltro option:selected').text();
        var tipoHeroe;
        switch (tipo) {
            case 'XMen':
                tipoHeroe = personajeheroe.TipoHeroe.xmen;
                break;
            case 'Avenger':
                tipoHeroe = personajeheroe.TipoHeroe.avenger;
                break;
            case 'Todos':
                tipoHeroe = 'Todos';
                break;
        }
        if (tipoHeroe == elemento['tipo']) {
            return elemento;
        }
        else if (tipoHeroe == 'Todos') {
            return elemento;
        }
    });
    var heroesFiltroUnoCopia = JSON.parse(JSON.stringify(heroesFiltroUno));
    var heroesFiltrados = heroesFiltroUno.map(function (elemento) {
        if (!$("#chkId").prop('checked')) {
            delete elemento['id'];
        }
        if (!$("#chkNombre").prop('checked')) {
            delete elemento['nombre'];
        }
        if (!$("#chkAlias").prop('checked')) {
            delete elemento['alias'];
        }
        if (!$("#chkPoder").prop('checked')) {
            delete elemento['poder'];
        }
        if (!$("#chkEdad").prop('checked')) {
            delete elemento['edad'];
        }
        if (!$("#chkTipo").prop('checked')) {
            delete elemento['tipo'];
        }
        return elemento;
    });
    calcularPromedios(heroesFiltrados);
    if (heroesFiltrados.length > 0) {
        crearTabla(heroesFiltroUnoCopia, heroesFiltrados);
    }
    else {
        var mensaje = $('<p>');
        var contenedor = $('#contenedor');
        mensaje.text('No hay heroes para mostrar');
        mensaje.addClass("h1");
        contenedor.empty();
        contenedor.append(mensaje);
    }
}
function limpiarFormuladio() {
    $("#formHeroes").trigger('reset');
    deshabilitarCambios();
    traerHeroes();
}
function limpiarLocalStore() {
    localStorage.clear();
    ultimoId = 1;
    deshabilitarCambios();
    traerHeroes();
}
function altaHeroes() {
    var nombre = $('#inputNombre').val();
    var alias = $('#inputAlias').val();
    var edad = $('#inputEdad').val();
    var poder = $('#inputPoder').val();
    var tipo = $('#selectTipo option:selected').text();
    var tipoHeroe;
    switch (tipo) {
        case 'XMen':
            tipoHeroe = personajeheroe.TipoHeroe.xmen;
            break;
        case 'Avenger':
            tipoHeroe = personajeheroe.TipoHeroe.avenger;
            break;
    }
    var heroe = new personajeheroe.Heroe(Number(ultimoId), String(nombre), Number(edad), String(alias), String(poder), tipoHeroe);
    localStorage.setItem(String(ultimoId), JSON.stringify(heroe));
    ultimoId++;
    localStorage.setItem(String(0), JSON.stringify(ultimoId));
    limpiarFormuladio();
}
function modificarHeroes() {
    var id = $('#inputId').val();
    var nombre = $('#inputNombre').val();
    var alias = $('#inputAlias').val();
    var edad = $('#inputEdad').val();
    var poder = $('#inputPoder').val();
    var tipo = $('#selectTipo option:selected').text();
    var tipoHeroe;
    switch (tipo) {
        case 'XMen':
            tipoHeroe = personajeheroe.TipoHeroe.xmen;
            break;
        case 'Avenger':
            tipoHeroe = personajeheroe.TipoHeroe.avenger;
            break;
    }
    var heroe = new personajeheroe.Heroe(Number(id), String(nombre), Number(edad), String(alias), String(poder), tipoHeroe);
    localStorage.setItem(String(id), JSON.stringify(heroe));
    limpiarFormuladio();
}
function eliminarHeroes() {
    var id = $('#inputId').val();
    localStorage.removeItem(String(id));
    limpiarFormuladio();
}
function calcularPromedios(heroes) {
    var cantidadHeroes = heroes.reduce(function (previo) {
        return previo + 1;
    }, 0);
    var totalEdad = heroes.reduce(function (previo, actual) {
        var resultado;
        if (previo == 0) {
            resultado = actual.edad;
        }
        else {
            resultado = previo + actual.edad;
        }
        return resultado;
    }, 0);
    var promEdad = totalEdad / cantidadHeroes;
    if (promEdad > 0) {
        $("#inputPromedioEdad").val(parseFloat(String(promEdad)).toFixed(2));
    }
    else {
        $("#inputPromedioEdad").val(0);
    }
}
function prevenirReload(evento) {
    evento.preventDefault();
}
function habilitarCambios() {
    $('#btnSetHeroe').hide(1000);
    $('#btnModHeroe').show(1000);
    $('#btnDelHeroe').show(1000);
    $('#btnCancHeroe').show(1000);
    $('#rowId').show(1000);
    $('#formHeroes').attr('onsubmit', 'return modificarHeroes()');
    var heroe = JSON.parse(localStorage.getItem(String(this.childNodes[0].textContent)));
    $('#inputId').val(heroe.id);
    $('#inputNombre').val(heroe.nombre);
    $('#inputAlias').val(heroe.alias);
    $('#inputEdad').val(heroe.edad);
    $('#inputPoder').val(heroe.poder);
    switch (heroe.tipo) {
        case 'XMen':
            $('#selectTipo').val('1');
            break;
        case 'Avenger':
            $('#selectTipo').val('2');
            break;
    }
}
function deshabilitarCambios() {
    $('#btnSetHeroe').show(1000);
    $('#rowId').hide(1000);
    $('#btnModHeroe').hide(1000);
    $('#btnDelHeroe').hide(1000);
    $('#btnCancHeroe').hide(1000);
    $('#formHeroes').attr('onsubmit', 'return altaHeroes()');
}
