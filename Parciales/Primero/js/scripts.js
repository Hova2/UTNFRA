window.addEventListener('load', asignarManejadores, false);
window.addEventListener('load', traerPersonajes, false);

function asignarManejadores(){
    document.getElementById('btnSetPersonaje').addEventListener('click',formulario,false);  
}

function crearTabla(arregloDatos){
    var tabla           = document.createElement("table");
    var contenedor      = document.getElementById('contenedor');
    var indices         = Object.keys(arregloDatos[0]);
    var tr              = tabla.insertRow(-1);
        tabla.className = "tablas";

    indices.forEach(dato => {
        var th           = document.createElement("th");
            th.innerHTML = dato;
        tr.appendChild(th);
    });

    arregloDatos.forEach(dato => {
        var tr = tabla.insertRow(-1);
        Object.values(dato).forEach(dato2 => {
            var td           = tr.insertCell(-1);
                td.innerHTML = dato2;
        });
    });

    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
}

function traerPersonajes(){
    var spinner    = document.createElement('img');
    var contenedor = document.getElementById('contenedor');
    var xhr        = new XMLHttpRequest();
    spinner.setAttribute('src','imagenes/spinner.gif');
    spinner.setAttribute('alt','Esperando');
    spinner.setAttribute('id','spinner');
    spinner.className      = "imagen";
    xhr.onreadystatechange = function(){
        if (this.readyState == 4){
            if(this.status == 200){
                var personajes = JSON.parse(this.responseText);
                if(personajes.length > 0){
                    crearTabla(personajes);
                }else{
                    var mensaje              = document.createElement('H1');
                    var texto                = document.createTextNode("No hay personajes para mostrar");
                        contenedor.innerHTML = "";
                    mensaje.appendChild(texto);
                    contenedor.appendChild(mensaje);
                }
            }else{
                console.log('Error: ' + this.statusText);
            }
        }else{
            contenedor.appendChild(spinner);
        }
    };
    xhr.open('GET','http://localhost:3000/traerPersonajes',true);
    xhr.send();
}

function formulario(){
    var formulario = document.createElement('form');
    
    var nombre    = document.createElement('input');
    var apellido  = document.createElement('input');
    var edad      = document.createElement('input');
    var stark     = document.createElement('input');
    var lannister = document.createElement('input');
    var targaryen = document.createElement('input');
    var trai      = document.createElement('input');
    var enviar    = document.createElement('input');
    
    var lNombre    = document.createElement('label');
    var lApellido  = document.createElement('label');
    var lEdad      = document.createElement('label');
    var lStark     = document.createElement('label');
    var lLannister = document.createElement('label');
    var lTargaryen = document.createElement('label');
    var lTrai      = document.createElement('label');
    
    formulario.className = 'frmGenerico';
    enviar.className = 'boton';
    
    nombre.setAttribute('type',"text");
    apellido.setAttribute('type',"text");
    edad.setAttribute('type',"text");
    stark.setAttribute('type',"radio");
    lannister.setAttribute('type',"radio");
    targaryen.setAttribute('type',"radio");
    trai.setAttribute('type',"checkbox");
    enviar.setAttribute('type',"submit");
    
    nombre.setAttribute('name',"nombre");
    apellido.setAttribute('name',"apellido");
    edad.setAttribute('name',"edad");
    stark.setAttribute('name',"casa");
    lannister.setAttribute('name',"casa");
    targaryen.setAttribute('name',"casa");
    trai.setAttribute('name',"traidor");
    enviar.setAttribute('value',"Enviar");
    
    stark.setAttribute('id',"stark");
    lannister.setAttribute('id',"lannister");
    targaryen.setAttribute('id',"targaryen");

    lNombre.htmlFor    = "nombre";
    lApellido.htmlFor  = "apellido";
    lEdad.htmlFor      = "edad";
    lStark.htmlFor     = "stark";
    lLannister.htmlFor = "lannister";
    lTargaryen.htmlFor = "targaryen";
    lTrai.htmlFor      = "traidor";
    
    lNombre.innerHTML    = "Nombre: ";
    lApellido.innerHTML  = "Apellido: ";
    lEdad.innerHTML      = "Edad: ";
    lStark.innerHTML     = "Stark: ";
    lLannister.innerHTML = "Lannister: ";
    lTargaryen.innerHTML = "Targaryen: ";
    lTrai.innerHTML      = "Traidor: ";
    
    formulario.appendChild(lNombre);
    formulario.appendChild(nombre);
    formulario.appendChild(lApellido);
    formulario.appendChild(apellido);
    formulario.appendChild(lEdad);
    formulario.appendChild(edad);
    formulario.appendChild(lStark);
    formulario.appendChild(stark);
    formulario.appendChild(lLannister);
    formulario.appendChild(lannister);
    formulario.appendChild(lTargaryen);
    formulario.appendChild(targaryen);
    formulario.appendChild(lTrai);
    formulario.appendChild(trai);
    formulario.appendChild(enviar);
    document.body.appendChild(formulario);
}