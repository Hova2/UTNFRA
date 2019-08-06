$(document).ready(asignarManejadores);
$(document).ready(traerLegisladores);

let ultimoId=1;

function asignarManejadores(){
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
    $('#btnDelLegislador').click(eliminarLegisladores);
    $('#rowId').hide();
    $('#btnModLegislador').hide();
    $('#btnDelLegislador').hide();
}

function crearTabla(arregloDatos,arregloDatosFiltrados){
    let tabla      = $('<table>');
    let contenedor = $('#contenedor');
    let indices    = Object.keys(arregloDatosFiltrados[0]);
    let tr         = $('<tr>');
    tabla.append(tr);

    tabla.addClass("table table-striped table-hover table-dark");

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

    contenedor.empty();
    contenedor.append(tabla);
}

function traerLegisladores(){    
    let legisladores=new Array();
    
    for(let i=1; i<ultimoId; i++) {
        let legislador=JSON.parse(localStorage.getItem(String(i)));
        if(legislador){
            legisladores.push(legislador);
        }
    }

    let legisladoresFiltroUno = legisladores.filter(function(elemento){
        let tipo=$('#selectTipo option:selected').text();
        let tipolegislador;
        switch(tipo){
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
        
        if(tipolegislador==elemento['tipo']){
            return elemento;
        }else if(tipolegislador=='Todos'){
            return elemento;
        }
    });

    let legisladoresFiltroUnoCopia = JSON.parse(JSON.stringify(legisladoresFiltroUno));

    calcularPromedios(legisladoresFiltroUnoCopia);
    
    let legisladoresFiltrados = legisladoresFiltroUno.map(function(elemento){
        if(!$("#chkId").prop('checked')){
            delete elemento['id'];
        }
        if(!$("#chkNombre").prop('checked')){
            delete elemento['nombre'];
        }
        if(!$("#chkApellido").prop('checked')){
            delete elemento['apellido'];
        }
        if(!$("#chkEmail").prop('checked')){
            delete elemento['email'];
        }
        if(!$("#chkEdad").prop('checked')){
            delete elemento['edad'];
        }
        if(!$("#chkSexo").prop('checked')){
            delete elemento['sexo'];
        }
        if(!$("#chkTipo").prop('checked')){
            delete elemento['tipo'];
        }
        return elemento;
    });

    if(legisladoresFiltrados.length > 0){
        crearTabla(legisladoresFiltroUnoCopia,legisladoresFiltrados);
    }else{
        let mensaje = $('<h1>');
        let contenedor = $('#contenedor');
        mensaje.text('No hay legisladores para mostrar');
        contenedor.empty();
        contenedor.append(mensaje);
    }
}

function limpiarFormuladio(){
    $("#formLegisladores").trigger('reset');
    deshabilitarCambios();
    traerLegisladores();
}

function limpiarLocalStore(){
    localStorage.clear();
    ultimoId=1;
    deshabilitarCambios();
    traerLegisladores();
}

function altaLegisladores(){
    let nombre = $('#inputNombre').val();
    let apellido = $('#inputApellido').val();
    let email = $('#inputEmail').val();
    let edad = $('#inputEdad').val();
    let sexo = $('[name=inputSexo]:checked').val();
    let tipo = $('[name=inputLegislador]:checked').val();
    let tipolegislador;
    switch(tipo){
        case 'diputado':
            tipolegislador = TipoLegislador.diputado;
        break;
        case 'senador':
            tipolegislador = TipoLegislador.senador;
        break;
    }
    let legislador = new Legislador(Number(ultimoId), String(nombre), String(apellido), String(email), Number(edad), String(sexo), tipolegislador);
    localStorage.setItem(String(ultimoId),JSON.stringify(legislador));
    ultimoId++;
    limpiarFormuladio();
}

function modificarLegisladores(){
    let id=$('#inputId').val();
    let nombre = $('#inputNombre').val();
    let apellido = $('#inputApellido').val();
    let email = $('#inputEmail').val();
    let edad = $('#inputEdad').val();
    let sexo = $('[name=inputSexo]:checked').val();
    let tipo = $('[name=inputLegislador]:checked').val();
    let tipolegislador;
    switch(tipo){
        case 'diputado':
            tipolegislador = TipoLegislador.diputado;
        break;
        case 'senador':
            tipolegislador = TipoLegislador.senador;
        break;
    }
    let legislador = new Legislador(Number(id), String(nombre), String(apellido), String(email), Number(edad), String(sexo), tipolegislador);
    localStorage.setItem(String(id),JSON.stringify(legislador));
    limpiarFormuladio();
}

function eliminarLegisladores(){
    let id=$('#inputId').val();
    localStorage.removeItem(String(id));
    limpiarFormuladio();
}

function calcularPromedios(legisladores){
    let cantidadLegisladores  = legisladores.reduce(function(previo){
        let resultado;
        
        if(previo==0){
            resultado=1;
        }else{
            resultado=previo+1;
        }
        return resultado;
    }, 0);

    let totalEdad  = legisladores.reduce(function(previo, actual){
        let resultado;
        
        if(previo==0){
            resultado=actual.edad;
        }else{
            resultado=previo + actual.edad;
        }
        return resultado;
    }, 0);


    let filtroMujeres = legisladores.filter(function(elemento){
        if(elemento.sexo=='Mujer'){
            return elemento;
        }
    });

    let cantidadMujeres  = filtroMujeres.reduce(function(previo){
        let resultado;
        
        if(previo==0){
            resultado=1;
        }else{
            resultado=previo+1;
        }
        return resultado;
    }, 0);
    
    let promEdad=totalEdad/cantidadLegisladores;
    if(promEdad>0){
        $("#inputPromedioEdad").val(promEdad);
    }else{
        $("#inputPromedioEdad").val(0);
    }

    let promMSH=cantidadMujeres/cantidadLegisladores;
    if(promMSH>0){
        $("#inputPromedioMSH").val(promMSH*100);
    }else{
        $("#inputPromedioMSH").val(0);
    }

}

function prevenirReload(evento){
    evento.preventDefault();
}

function habilitarCambios(){
    $('#btnSetLegislador').hide(1000);
    $('#btnModLegislador').show(1000);
    $('#btnDelLegislador').show(1000);
    $('#rowId').show(1000);

    $('#formLegisladores').attr('onsubmit', 'return modificarLegisladores()');

    let legislador = JSON.parse(localStorage.getItem(String(this.childNodes[0].textContent)));
        
    $('#inputId').val(legislador.id);
    $('#inputNombre').val(legislador.nombre);
    $('#inputApellido').val(legislador.apellido);
    $('#inputEmail').val(legislador.email);
    $('#inputEdad').val(legislador.edad);
    
    switch(legislador.sexo){
        case 'Hombre':
                $('#inputHombre').prop('checked',true);
        break;
        case 'Mujer':
                $('#inputMujer').prop('checked',true);
        break;
    }

    switch(legislador.tipo){
        case 'Diputado':
                $('#inputDiputado').prop('checked',true);
        break;
        case 'Senador':
                $('#inputSenador').prop('checked',true);
        break;
    }
}

function deshabilitarCambios(){
    $('#btnSetLegislador').show(1000);
    $('#rowId').hide(1000);
    $('#btnModLegislador').hide(1000);
    $('#btnDelLegislador').hide(1000);

    $('#formLegisladores').attr('onsubmit', 'return altaLegisladores()');
}