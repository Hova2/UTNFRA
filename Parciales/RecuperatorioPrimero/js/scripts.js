window.addEventListener('load', asignarManejadores, false);
window.addEventListener('load', traerPersonajes, false);

function asignarManejadores(){
    document.getElementById('btnSetPersonaje').addEventListener('click', formulario, false);  
}

function crearTabla(arregloDatos){
    var tabla      = document.createElement("table");
    var contenedor = document.getElementById('contenedor');
    var indices    = Object.keys(arregloDatos[0]);
    var tr         = tabla.insertRow(-1);
        
    tabla.className = "tablas";

    indices.forEach(dato => {
        var th           = document.createElement("th");
            th.innerHTML = dato;
        tr.appendChild(th);
    });

    arregloDatos.forEach(dato => {
        var tr = tabla.insertRow(-1);
        tr.addEventListener('click', formulario, false);
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
                    var mensaje = document.createElement('H1');
                    var texto   = document.createTextNode("No hay personajes para mostrar");
                        
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
    var temporada  = document.createElement('select');
    var temp1      = document.createElement('option');
    var temp2      = document.createElement('option');
    var temp3      = document.createElement('option');
    var temp4      = document.createElement('option');
    var temp5      = document.createElement('option');
    var temp6      = document.createElement('option');
    var temp7      = document.createElement('option');
    
    var nombre      = document.createElement('input');
    var apellido    = document.createElement('input');
    var edad        = document.createElement('input');
    var stark       = document.createElement('input');
    var lannister   = document.createElement('input');
    var targaryen   = document.createElement('input');
    var trai        = document.createElement('input');
    var guerrero    = document.createElement('input');
    var manipulador = document.createElement('input');
    var diplomatico = document.createElement('input');
    var lider       = document.createElement('input');
    var vengativo   = document.createElement('input');
    var ambicioso   = document.createElement('input');
    var cerrar      = document.createElement('input');
    
    var lNombre      = document.createElement('label');
    var lApellido    = document.createElement('label');
    var lEdad        = document.createElement('label');
    var lStark       = document.createElement('label');
    var lLannister   = document.createElement('label');
    var lTargaryen   = document.createElement('label');
    var lTrai        = document.createElement('label');
    var lGuerrero    = document.createElement('label');
    var lManipulador = document.createElement('label');
    var lDiplomatico = document.createElement('label');
    var lLider       = document.createElement('label');
    var lVengativo   = document.createElement('label');
    var lAmbicioso   = document.createElement('label');
    
    cerrar.className = 'boton tamFuenteBoton';

    cerrar.addEventListener("click", cerrarFormulario , false);
    
    formulario.id  = 'formulario';
    nombre.id      = 'nombre';
    apellido.id    = 'apellido';
    edad.id        = 'edad';
    stark.id       = "stark";
    lannister.id   = "lannister";
    targaryen.id   = "targaryen";
    trai.id        = 'traidor';
    guerrero.id    = 'guerrero';
    manipulador.id = 'manipulador';
    diplomatico.id = 'diplomatico';
    lider.id       = 'lider';
    vengativo.id   = 'vengativo';
    ambicioso.id   = 'ambicioso';
    temporada.id   = 'temporada';
    cerrar.id      = "cerrar";

    nombre.type      = "text";
    apellido.type    = "text";
    edad.type        = "text";
    stark.type       = "radio";
    lannister.type   = "radio";
    targaryen.type   = "radio";
    trai.type        = "checkbox";
    guerrero.type    = "checkbox";
    manipulador.type = "checkbox";
    diplomatico.type = "checkbox";
    lider.type       = "checkbox";
    vengativo.type   = "checkbox";
    ambicioso.type   = "checkbox";
    cerrar.type      = "button";

    nombre.name      = "nombre";
    apellido.name    = "apellido";
    edad.name        = "edad";
    stark.name       = "casa";
    lannister.name   = "casa";
    targaryen.name   = "casa";
    trai.name        = "traidor";
    guerrero.name    = "guerrero";
    manipulador.name = "manipulador";
    diplomatico.name = "diplomatico";
    lider.name       = "lider";
    vengativo.name   = "vengativo";
    ambicioso.name   = "ambicioso";
    temporada.name   = "temporada";


    cerrar.name = "cerrar";

    stark.value     = "Stark";
    lannister.value = "Lannister";
    targaryen.value = "Targaryen";
    cerrar.value    = "Cerrar";

    lNombre.htmlFor      = "nombre";
    lApellido.htmlFor    = "apellido";
    lEdad.htmlFor        = "edad";
    lStark.htmlFor       = "stark";
    lLannister.htmlFor   = "lannister";
    lTargaryen.htmlFor   = "targaryen";
    lTrai.htmlFor        = "traidor";
    lGuerrero.htmlFor    = "guerrero";
    lManipulador.htmlFor = "manipulador";
    lDiplomatico.htmlFor = "diplomatico";
    lLider.htmlFor       = "lider";
    lVengativo.htmlFor   = "vengativo";
    lAmbicioso.htmlFor   = "ambicioso";
    
    lNombre.innerHTML      = "Nombre: ";
    lApellido.innerHTML    = "Apellido: ";
    lEdad.innerHTML        = "Edad: ";
    lStark.innerHTML       = "Stark: ";
    lLannister.innerHTML   = "Lannister: ";
    lTargaryen.innerHTML   = "Targaryen: ";
    lTrai.innerHTML        = "Traidor: ";
    lGuerrero.innerHTML    = "Guerrero";
    lManipulador.innerHTML = "Manipulador";
    lDiplomatico.innerHTML = "Diplomatico";
    lLider.innerHTML       = "Lider";
    lVengativo.innerHTML   = "Vengativo";
    lAmbicioso.innerHTML   = "Ambicioso";

    temporada.form = 'formulario';
    temp1.value    = "1";
    temp2.value    = "2";
    temp3.value    = "3";
    temp4.value    = "4";
    temp5.value    = "5";
    temp6.value    = "6";
    temp7.value    = "7";
    temp1.text     = "Temporada 1";
    temp2.text     = "Temporada 2";
    temp3.text     = "Temporada 3";
    temp4.text     = "Temporada 4";
    temp5.text     = "Temporada 5";
    temp6.text     = "Temporada 6";
    temp7.text     = "Temporada 7";
    
    temporada.add(temp1);
    temporada.add(temp2);
    temporada.add(temp3);
    temporada.add(temp4);
    temporada.add(temp5);
    temporada.add(temp6);
    temporada.add(temp7);

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
    formulario.appendChild(lGuerrero);
    formulario.appendChild(guerrero);
    formulario.appendChild(lManipulador);
    formulario.appendChild(manipulador);
    formulario.appendChild(lDiplomatico);
    formulario.appendChild(diplomatico);
    formulario.appendChild(lLider);
    formulario.appendChild(lider);
    formulario.appendChild(lVengativo);
    formulario.appendChild(vengativo);
    formulario.appendChild(lAmbicioso);
    formulario.appendChild(ambicioso);
    formulario.appendChild(temporada);
    
    
    if(this.nodeName.localeCompare('INPUT') === 0){
        var enviar = document.createElement('input');
        
        formulario.className = 'frmGenericoA fuente tamFuente';

        enviar.className = 'boton tamFuenteBoton';
        enviar.id        = "enviar";
        enviar.type      = "submit";
        enviar.name      = "enviar";
        enviar.value     = "Enviar";
        
        enviar.addEventListener("click", altaPersonaje , false);

        formulario.appendChild(enviar);
    }else{
        var id              = document.createElement('input');
        var modificar       = document.createElement('input');
        var eliminar        = document.createElement('input');
        var caracteristicas = [];
            
        formulario.className = 'frmGenericoMB fuente tamFuente';
        
        id.id               = 'id';
        id.type             = "hidden";
        id.name             = "id";
        modificar.className = 'boton tamFuenteBoton';
        modificar.id        = "modificar";
        modificar.type      = "submit";
        modificar.name      = "modificar";
        modificar.value     = "Modificar";
        eliminar.className  = 'boton tamFuenteBoton';
        eliminar.id         = "eliminar";
        eliminar.type       = "submit";
        eliminar.name       = "eliminar";
        eliminar.value      = "Eliminar";

                    id.value                   = this.childNodes[0].textContent;
                    nombre.value               = this.childNodes[1].textContent;
                    apellido.value             = this.childNodes[2].textContent;
                    edad.value                 = this.childNodes[3].textContent;
formulario.elements['casa'].value              = this.childNodes[4].textContent;
                    trai.checked               = JSON.parse(this.childNodes[5].textContent);
formulario.elements['temporada'].selectedIndex = parseInt(this.childNodes[6].textContent)-1;
                    caracteristicas            = this.childNodes[7].textContent.split(',');
                    
                    guerrero.checked=false;
                    manipulador.checked=false;
                    diplomatico.checked=false;
                    lider.checked=false;
                    vengativo.checked=false;
                    ambicioso.checked=false;
                    
                    for (i = 0; i < caracteristicas.length; i++) {
                        if(caracteristicas[i].localeCompare('Guerrero') === 0){
                            guerrero.checked=true;
                        }else{
                            if(caracteristicas[i].localeCompare('Manipulador') === 0){
                                manipulador.checked=true;
                            }else{
                                if(caracteristicas[i].localeCompare('Diplomatico') === 0){
                                    diplomatico.checked=true;
                                }else{
                                    if(caracteristicas[i].localeCompare('Lider') === 0){
                                        lider.checked=true;
                                    }else{
                                        if(caracteristicas[i].localeCompare('Vengativo') === 0){
                                            vengativo.checked=true;
                                        }else{
                                            if(caracteristicas[i].localeCompare('Ambicioso') === 0){
                                                ambicioso.checked=true;
                                            }
                                        }
                                    } 
                                } 
                            }
                        }
                    }
                    
                    
        

        modificar.addEventListener("click", modificarPersonaje , false);
        eliminar.addEventListener("click", bajaPersonaje , false);

        formulario.appendChild(id);
        formulario.appendChild(modificar);
        formulario.appendChild(eliminar);
    }
    
    formulario.appendChild(cerrar);

    document.body.appendChild(formulario);
}

function altaPersonaje(){
    var elementosForm   = document.getElementById('formulario').elements;
    var nombre          = elementosForm['nombre'].value;
    var apellido        = elementosForm['apellido'].value;
    var edad            = elementosForm['edad'].value;
    var casa            = elementosForm['casa'].value;
    var trai            = elementosForm['traidor'];
    var caracteristicas = [];
    var temporada       = elementosForm['temporada'].value;
    var xhr             = new XMLHttpRequest();
    var datos           = "";
    

    if(elementosForm['guerrero'].checked){
        caracteristicas.push("Guerrero");
    }
    if(elementosForm['manipulador'].checked){
        caracteristicas.push("Manipulador");
    }
    if(elementosForm['diplomatico'].checked){
        caracteristicas.push("Diplomatico");
    }
    if(elementosForm['lider'].checked){
        caracteristicas.push("Lider");
    }
    if(elementosForm['vengativo'].checked){
        caracteristicas.push("Vengativo");
    }
    if(elementosForm['ambicioso'].checked){
        caracteristicas.push("Ambicioso");
    }

    datos = datos.concat("nombre=");
    datos = datos.concat(encodeURIComponent(nombre));
    datos = datos.concat("&apellido=");
    datos = datos.concat(encodeURIComponent(apellido));
    datos = datos.concat("&edad=");
    datos = datos.concat(encodeURIComponent(edad));
    datos = datos.concat("&casa=");
    datos = datos.concat(encodeURIComponent(casa));
    datos = datos.concat("&traidor=");
    datos = datos.concat(encodeURIComponent(trai.checked));
    datos = datos.concat("&temporada=");
    datos = datos.concat(encodeURIComponent(temporada));
    datos = datos.concat("&caracteristicas=");
    datos = datos.concat(encodeURIComponent(caracteristicas));
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert(xhr.responseText);
            }
            else {
                console.log('Error ' + xhr.statusText);
            }
        }
    };
    xhr.open("POST", "http://localhost:3000/altaPersonaje", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(datos);
}

function modificarPersonaje(){
    var elementosForm   = document.getElementById('formulario').elements;
    var id              = elementosForm['id'].value;
    var nombre          = elementosForm['nombre'].value;
    var apellido        = elementosForm['apellido'].value;
    var edad            = elementosForm['edad'].value;
    var casa            = elementosForm['casa'].value;
    var trai            = elementosForm['traidor'];
    var caracteristicas = [];
    var temporada       = elementosForm['temporada'].value;
    var xhr             = new XMLHttpRequest();
    var datos           = "";

    if(elementosForm['guerrero'].checked){
        caracteristicas.push("Guerrero");
    }
    if(elementosForm['manipulador'].checked){
        caracteristicas.push("Manipulador");
    }
    if(elementosForm['diplomatico'].checked){
        caracteristicas.push("Diplomatico");
    }
    if(elementosForm['lider'].checked){
        caracteristicas.push("Lider");
    }
    if(elementosForm['vengativo'].checked){
        caracteristicas.push("Vengativo");
    }
    if(elementosForm['ambicioso'].checked){
        caracteristicas.push("Ambicioso");
    }
    
    datos = datos.concat("id=");
    datos = datos.concat(encodeURIComponent(id));
    datos = datos.concat("&nombre=");
    datos = datos.concat(encodeURIComponent(nombre));
    datos = datos.concat("&apellido=");
    datos = datos.concat(encodeURIComponent(apellido));
    datos = datos.concat("&edad=");
    datos = datos.concat(encodeURIComponent(edad));
    datos = datos.concat("&casa=");
    datos = datos.concat(encodeURIComponent(casa));
    datos = datos.concat("&traidor=");
    datos = datos.concat(encodeURIComponent(trai.checked));
    datos = datos.concat("&temporada=");
    datos = datos.concat(encodeURIComponent(temporada));
    datos = datos.concat("&caracteristicas=");
    datos = datos.concat(encodeURIComponent(caracteristicas));
          
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert(xhr.responseText);
            }
            else {
                console.log('Error ' + xhr.statusText);
            }
        }
    };
    xhr.open("POST", "http://localhost:3000/modificarPersonaje", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(datos);
}

function bajaPersonaje(){
    var elementosForm = document.getElementById('formulario').elements;
    var id            = elementosForm['id'].value;
    var xhr           = new XMLHttpRequest();
    var datos         = "";
    
    datos = datos.concat("id=");
    datos = datos.concat(encodeURIComponent(id));

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert(xhr.responseText);
            }
            else {
                console.log('Error ' + xhr.statusText);
            }
        }
    };
    
    xhr.open("POST", "http://localhost:3000/bajaPersonaje", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(datos);
}

function cerrarFormulario(){
    document.body.removeChild(document.getElementById('formulario'));
}