$(document).ready(asignarManejadores);
$(document).ready(traerHeroes);

let ultimoId=JSON.parse(localStorage.getItem(String(0)));

if(!ultimoId){
    ultimoId=1;
}

function asignarManejadores(){
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

function crearTabla(arregloDatos,arregloDatosFiltrados){
    let tabla      = $('<table>');
    let divResponsive      = $('<div>');
    let contenedor = $('#contenedor');
    let indices    = Object.keys(arregloDatosFiltrados[0]);
    let tr         = $('<tr>');
    tabla.append(tr);

    tabla.addClass("table table-striped table-hover table-bordered table-dark");
    
    divResponsive.addClass("table-responsive");

    indices.forEach(dato => {
        let th           = $('<th>');
            th.append(dato);
        tr.append(th);
    });

    let cont=0;
    arregloDatosFiltrados.forEach(dato => {
        let tr = $('<tr>');
        tr.click(habilitarCambios);
        let tdid = $('<td>');
        tdid.hide();
        tdid.append(arregloDatos[cont]['id']);
        tr.append(tdid);
        indices.forEach(function (elemento) {
            let td = $('<td>');
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

function traerHeroes(){    
    let heroes=new Array();
    
    for(let i=1; i<ultimoId; i++) {
        let heroe=JSON.parse(localStorage.getItem(String(i)));
        if(heroe){
            heroes.push(heroe);
        }
    }

    let heroesFiltroUno = heroes.filter(function(elemento){
        let tipo=$('#selectTipoFiltro option:selected').text();
        let tipoHeroe;
        switch(tipo){
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
        
        if(tipoHeroe==elemento['tipo']){
            return elemento;
        }else if(tipoHeroe=='Todos'){
            return elemento;
        }
    });

    let heroesFiltroUnoCopia = JSON.parse(JSON.stringify(heroesFiltroUno));
    
    let heroesFiltrados = heroesFiltroUno.map(function(elemento){
        if(!$("#chkId").prop('checked')){
            delete elemento['id'];
        }
        if(!$("#chkNombre").prop('checked')){
            delete elemento['nombre'];
        }
        if(!$("#chkAlias").prop('checked')){
            delete elemento['alias'];
        }
        if(!$("#chkPoder").prop('checked')){
            delete elemento['poder'];
        }
        if(!$("#chkEdad").prop('checked')){
            delete elemento['edad'];
        }
        if(!$("#chkTipo").prop('checked')){
            delete elemento['tipo'];
        }
        return elemento;
    });

    calcularPromedios(heroesFiltrados);

    if(heroesFiltrados.length > 0){
        crearTabla(heroesFiltroUnoCopia,heroesFiltrados);
    }else{
        let mensaje = $('<p>');
        let contenedor = $('#contenedor');
        mensaje.text('No hay heroes para mostrar');
        mensaje.addClass("h1");
        contenedor.empty();
        contenedor.append(mensaje);
    }   
}

function limpiarFormuladio(){
    $("#formHeroes").trigger('reset');
    deshabilitarCambios();
    traerHeroes();
}

function limpiarLocalStore(){
    localStorage.clear();
    ultimoId=1;
    deshabilitarCambios();
    traerHeroes();
}

function altaHeroes(){
    let nombre = $('#inputNombre').val();
    let alias = $('#inputAlias').val();
    let edad = $('#inputEdad').val();
    let poder = $('#inputPoder').val();
    let tipo = $('#selectTipo option:selected').text();
    let tipoHeroe;
    switch(tipo){
        case 'XMen':
            tipoHeroe = personajeheroe.TipoHeroe.xmen;
        break;
        case 'Avenger':
            tipoHeroe = personajeheroe.TipoHeroe.avenger;
        break;
    }
    let heroe = new personajeheroe.Heroe(Number(ultimoId), String(nombre), Number(edad), String(alias), String(poder), tipoHeroe);
    localStorage.setItem(String(ultimoId),JSON.stringify(heroe));
    ultimoId++;
    localStorage.setItem(String(0),JSON.stringify(ultimoId));
    limpiarFormuladio();
}

function modificarHeroes(){
    let id=$('#inputId').val();
    let nombre = $('#inputNombre').val();
    let alias = $('#inputAlias').val();
    let edad = $('#inputEdad').val();
    let poder = $('#inputPoder').val();
    let tipo = $('#selectTipo option:selected').text();
    let tipoHeroe;
    switch(tipo){
        case 'XMen':
            tipoHeroe = personajeheroe.TipoHeroe.xmen;
        break;
        case 'Avenger':
            tipoHeroe = personajeheroe.TipoHeroe.avenger;
        break;
    }
    let heroe = new personajeheroe.Heroe(Number(id), String(nombre), Number(edad), String(alias), String(poder), tipoHeroe);
    localStorage.setItem(String(id),JSON.stringify(heroe));
    limpiarFormuladio();
}

function eliminarHeroes(){
    let id=$('#inputId').val();
    localStorage.removeItem(String(id));
    limpiarFormuladio();
}

function calcularPromedios(heroes){
    let cantidadHeroes  = heroes.reduce(function(previo){
        return previo+1;
    }, 0);

    let totalEdad  = heroes.reduce(function(previo, actual){
        let resultado;
        
        if(previo==0){
            resultado=actual.edad;
        }else{
            resultado=previo + actual.edad;
        }
        return resultado;
    }, 0);
    
    let promEdad=totalEdad/cantidadHeroes;
    if(promEdad>0){
        $("#inputPromedioEdad").val(parseFloat(String(promEdad)).toFixed(2));
    }else{
        $("#inputPromedioEdad").val(0);
    }
}

function prevenirReload(evento){
    evento.preventDefault();
}

function habilitarCambios(){
    $('#btnSetHeroe').hide(1000);
    $('#btnModHeroe').show(1000);
    $('#btnDelHeroe').show(1000);
    $('#btnCancHeroe').show(1000);
    $('#rowId').show(1000);

    $('#formHeroes').attr('onsubmit', 'return modificarHeroes()');

    let heroe = JSON.parse(localStorage.getItem(String(this.childNodes[0].textContent)));
        
    $('#inputId').val(heroe.id);
    $('#inputNombre').val(heroe.nombre);
    $('#inputAlias').val(heroe.alias);
    $('#inputEdad').val(heroe.edad);
    $('#inputPoder').val(heroe.poder);
    
    switch(heroe.tipo){
        case 'XMen':
            $('#selectTipo').val('1');
        break;
        case 'Avenger':
            $('#selectTipo').val('2');
        break;
    }
}

function deshabilitarCambios(){
    $('#btnSetHeroe').show(1000);
    $('#rowId').hide(1000);
    $('#btnModHeroe').hide(1000);
    $('#btnDelHeroe').hide(1000);
    $('#btnCancHeroe').hide(1000);

    $('#formHeroes').attr('onsubmit', 'return altaHeroes()');
}