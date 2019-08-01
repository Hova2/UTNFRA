$(document).ready(asignarManejadores);
$(document).ready(traerMascotas);

let ultimoId;

if(localStorage.length==0){
    ultimoId=1;
}else{
    ultimoId=Number(localStorage.getItem(String(0)));
}


function asignarManejadores(){
    $('#btnSetMascota').click(altaMascota);  
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

function traerMascotas(){    
    let mascotas=new Array();
    
    for(let i=1; i<=localStorage.length-1; i++) {
        mascotas.push(JSON.parse(localStorage.getItem(String(i))));
    }

    if(mascotas.length > 0){
        crearTabla(mascotas);
    }else{
        let mensaje = $('<h1>');
        let contenedor = $('#contenedor');
        mensaje.text('No hay mascotas para mostrar');
        contenedor.empty();
        contenedor.append(mensaje);
    }
}

function altaMascota(){
    let id = ultimoId;
    let nombre = $("#formMascotas").find('input[id=inputNombre]').val();
    let edad = $("#formMascotas").find('input[id=inputEdad]').val();
    let patas = $("#formMascotas").find('input[id=inputPatas]').val();
    let tipo = $("#formMascotas").find('select[id=selectTipo] option:selected').text();
    let tipoanimal;
    switch(tipo){
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
    let mascota = new Mascota(id,tipoanimal,Number(patas),String(nombre),Number(edad));
    localStorage.setItem(String(ultimoId),JSON.stringify(mascota));
    ultimoId++;
    localStorage.setItem(String(0),String(ultimoId));
}