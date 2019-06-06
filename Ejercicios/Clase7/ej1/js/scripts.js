window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){
    
  document.getElementById('btnGetPersonas').addEventListener('click',traerPersonas,false);
  
    document.forms[0].addEventListener('submit',e=>{
    e.preventDefault;  
    var persona={};
    persona.nombre = document.getElementById('txtNombre').value;
    persona.apellido = document.getElementById('txtApellido').value;
    agregarPersona(persona);
  },false);


}

function agregarPersona(persona){

    var xhr = new XMLHttpRequest();
    var rtaPersona;
    var info = document.getElementById('info');
    var personas=[];
    var spinner = document.createElement('img');
    spinner.setAttribute('src','./images/149.gif');
    spinner.setAttribute('alt','spinner');
    spinner.setAttribute('style','height: 30px');

    
    xhr.onreadystatechange = function(){

        if(this.readyState == 4){

            if(this.status == 200){

               rtaPersona=JSON.parse(this.responseText);

               document.getElementById('id').value = rtaPersona.id;
               document.getElementById('nombre').value = rtaPersona.nombre;
               document.getElementById('apellido').value = rtaPersona.apellido;
               var spin = document.getElementById('spin');
               spin.removeChild(spin.firstChild);
                                                    
            }
            else{
                console.log('Error: ' + this.statusText);
            }
        }
        else{
            document.getElementById('spin').appendChild(spinner);
        }
    };

xhr.open('POST','http://localhost:3000/altaPersona',true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify(persona));


}

function personaToString(persona){

    var cadena = '';
    
    for(var prop in persona){
        cadena += '<b>' + prop + ':</b>' + persona[prop] + ' '; 
    }

    return cadena;
}

function newPersona(formulario){
    var persona = {};
    persona.nombre = formulario.getElementById('txtNombre').value;
    persona.apellido = formulario.getElementById('txtApellido').value;

    return persona;
}

function traerPersonas(){
   
    var personas=[];
    var xhr = new XMLHttpRequest();
    var spinner = document.createElement('img');
    spinner.setAttribute('src','./images/149.gif');
    spinner.setAttribute('alt','spinner');
    spinner.setAttribute('style','height: 30px');
    var info =  document.getElementById('info');
    info.innerHTML='';

    xhr.onreadystatechange=function(){
        if (this.readyState == 4){
            if(this.status == 200){
               personas=JSON.parse(this.responseText);
               for(var i in personas){
                info.innerHTML+='<p>' + personaToString(personas[i]) + '</p>';
               }
               
               
            }else{
                console.log('Error: ' + this.statusText);
            }
        }else{
            //console.log('Error: ' + this.readyState);
            //info.appendChild(spinner);
        }
    };

    xhr.open('GET','http://localhost:3000/traerPersonasArray',true);
    xhr.send();

}