$(document).ready(traerMascotas);


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
        Object.values(dato).forEach(dato2 => {
            var td           = $('<td>');
                td.append(dato2);
                tr.append(td);
        });
    });

    contenedor.empty();
    contenedor.append(tabla);
}

function traerMascotas(){    
    let personajes=new Array();
    
    if(personajes.length > 0){
        crearTabla(personajes);
    }else{
        let mensaje = $('<h1>');
        let contenedor = $('#contenedor');
        mensaje.text('No hay mascotas para mostrar');
        contenedor.empty();
        contenedor.append(mensaje);
    }
}