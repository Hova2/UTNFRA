$(document).ready(asignarManejadores);
$(document).ready(traerLegisladores);

let ultimoId;

if(localStorage.length==0){
    ultimoId=1;
}else{
    ultimoId=Number(localStorage.getItem(String(0)));
}


function asignarManejadores(){
    $('#btnSetLegislador').click(altaLegisladores);
    $('#chkId').change(traerLegisladores);
    $('#chkNombre').change(traerLegisladores);
    $('#chkApellido').change(traerLegisladores);
    $('#chkEmail').change(traerLegisladores);
    $('#chkEdad').change(traerLegisladores);
    $('#chkSexo').change(traerLegisladores);
    $('#chkTipo').change(traerLegisladores);
    $('#chkTipo').change(traerLegisladores);
    $('#selectTipo').change(traerLegisladores);
    $('#btnSetLegislador').click(limpiarFormuladio);
    $('#btnDelLocalStore').click(limpiarLocalStore);
}

function crearTabla(arregloDatos){
    let tabla      = $('<table>');
    let contenedor = $('#contenedor');
    let indices    = Object.keys(arregloDatos[0]);
    let tr         = $('<tr>');
    tabla.append(tr);

    tabla.addClass("tablas");

    indices.forEach(dato => {
        let th           = $('<th>');
            th.append(dato);
        tr.append(th);
    });

   arregloDatos.forEach(dato => {
        let tr = $('<tr>');
        //tr.click(formulario);
        indices.forEach(function (elemento) {
            let td = $('<td>');
            td.append(dato[elemento]);
            tr.append(td);
        });
        tabla.append(tr);
    });

    contenedor.empty();
    contenedor.append(tabla);
}

function traerLegisladores(){    
    let legisladores=new Array();
    
    for(let i=1; i<=localStorage.length-1; i++) {
        legisladores.push(JSON.parse(localStorage.getItem(String(i))));
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
    
    let legisladoresFiltrados = legisladoresFiltroUno.filter(function(elemento){
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
        crearTabla(legisladoresFiltrados);
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
    traerLegisladores();
}

function limpiarLocalStore(){
    localStorage.clear();
    ultimoId=1;
    traerLegisladores();
}

function altaLegisladores(){
    let id = ultimoId;
    let nombre = $("#formLegisladores").find('input[id=inputNombre]').val();
    let apellido = $("#formLegisladores").find('input[id=inputApellido]').val();
    let email = $("#formLegisladores").find('input[id=inputEmail]').val();
    let edad = $("#formLegisladores").find('input[id=inputEdad]').val();
    let sexo = $("#formLegisladores").find('input[name=inputSexo]:checked').val();
    let tipo = $("#formLegisladores").find('input[name=inputLegislador]:checked').val();
    let tipolegislador;
    switch(tipo){
        case 'diputado':
            tipolegislador = TipoLegislador.diputado;
        break;
        case 'senador':
            tipolegislador = TipoLegislador.senador;
        break;
    }
    let legislador = new Legislador(Number(id), String(nombre), String(apellido),String(email), Number(edad), String(sexo), tipolegislador);
    localStorage.setItem(String(ultimoId),JSON.stringify(legislador));
    ultimoId++;
    localStorage.setItem(String(0),String(ultimoId));
}