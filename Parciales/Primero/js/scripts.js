window.addEventListener('load', asignarManejadores, false);
window.addEventListener('load', traerPersonajes, false);

function asignarManejadores(){
}

function crearTabla(arregloDatos){
    var tabla      = document.createElement("table");
    var contenedor = document.getElementById("tabla");
    var indices=Object.keys(arregloDatos[0]);
    var tr = tabla.insertRow(-1);
    tabla.className="tablas";

    indices.forEach(dato => {
        var th = document.createElement("th");
        th.innerHTML = dato;
        tr.appendChild(th);
    });

    arregloDatos.forEach(dato => {
        var tr = tabla.insertRow(-1);
        Object.values(dato).forEach(dato2 => {
            var td=tr.insertCell(-1);
            td.innerHTML=dato2;
        });
    });

    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
}

function traerPersonajes(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/traerPersonajes',true);
    xhr.onreadystatechange=function(personajes){
        if (this.readyState === 4){
            if(this.status === 200){
                var personajes=JSON.parse(this.responseText);
                if(personajes.length > 0){
                    crearTabla(personajes);
                }else{
                    var mensaje    = document.createElement("H1");
                    var texto = document.createTextNode("No hay personajes para mostrar");
                    var contenedor = document.getElementById("tabla");
                    mensaje.appendChild(texto);
                    contenedor.appendChild(mensaje);
                }
            }else{
                console.log('Error: ' + this.statusText);
            }
        }
    };
    xhr.send();
}