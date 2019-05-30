window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){
    
  document.getElementById('btnGetPersona').addEventListener('click',traerPersona,false);  
    
}

function traerPersona(){
    var nombre = document.getElementById('txtNombre');
    var apellido = document.getElementById('txtApellido');
    var edad = document.getElementById('txtEdad');
    var info =  document.getElementById('info');
    var persona;

    var xhr = new XMLHttpRequest();
    var spinner = document.createElement('img');
    spinner.setAttribute('src','images/149.gif');

    xhr.onreadystatechange=function(){
        if (this.readyState == 4){
            if(this.status == 200){
               persona=JSON.parse(this.responseText);
               nombre.value=persona.nombre;
               apellido.value=persona.apellido;
               edad.value=persona.edad;
               info.innerHTML="";
               
            }else{
                console.log('Error: ' + this.statusText);
            }
        }else{
            //console.log('Error: ' + this.readyState);
            info.appendChild(spinner);
        }
    };

    xhr.open('GET','http://localhost:3000/traerJSON',true);
    xhr.send();

}

/*window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){
    document.forms[0].addEventListener('submit',function(e){
        e.preventDefault();
        manejarSubmit();
    }

    );
}

function manejarSubmit(){
    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;

    var xhr = new XMLHttpRequest();
    var info =  document.getElementById('info');
    var datos = 'nombre=' + encodeURIComponent(nombre) + '&' + 'apellido=' + encodeURIComponent(apellido);
    var spinner = document.createElement('img');
    spinner.setAttribute('src','images/149.gif');

    xhr.onreadystatechange=function(){
        if (this.readyState == 4){
            if(this.status == 200){
               info.innerHTML = this.responseText;
            }else{
                console.log('Error: ' + this.statusText);
            }
        }else{
            //console.log('Error: ' + this.readyState);
            info.appendChild(spinner);
        }
    };

    xhr.open('POST','http://localhost:3000/enviarDatos',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(datos);

}*/

/*function ejecutar(){
    //alert("Hola mundo");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (this.readyState == 4){
            if(this.status == 200){
                document.getElementById('info').innerHTML = this.responseText;
            }
        }
    };

    xhr.open('GET','http://localhost:3000/lista.txt',true);
    xhr.send();
}*/