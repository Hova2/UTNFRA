window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){
    document.getElementById('pHelado').addEventListener('click',cargarAccionesHelado,false);  
    document.getElementById('pHelado').addEventListener('mouseover',cambiarFondo,false);  
    document.getElementById('pHelado').addEventListener('mouseout',cambiarFondo,false);  
    document.getElementById('pVenta').addEventListener('click',cargarAccionesVenta,false);  
    document.getElementById('pVenta').addEventListener('mouseover',cambiarFondo,false);  
    document.getElementById('pVenta').addEventListener('mouseout',cambiarFondo,false);      
  }

function cargarAccionesHelado(){
    var acciones =  document.getElementById('acciones');
    acciones.innerHTML='';
    acciones.innerHTML+='<p>' + 'CargarH' + '</p>';
    acciones.innerHTML+='<p>' + 'CargarH (Con imagen)' + '</p>';
    acciones.innerHTML+='<p>' + 'ModificarH' + '</p>';
    acciones.innerHTML+='<p>' + 'ConsultarH' + '</p>';
}

function cargarAccionesVenta(){
    var acciones = document.getElementById('acciones');
    acciones.innerHTML='';
    acciones.innerHTML+='<p>' + 'CargarV' + '</p>';
    acciones.innerHTML+='<p>' + 'CargarV (Con imagen)' + '</p>';
    acciones.innerHTML+='<p>' + 'ConsultarV' + '</p>';
}

function cambiarFondo(){
    var obj = event.target;
    var evento = event.type;
    if(evento == "mouseover"){
        obj.style.backgroundColor = "Black";
    }else{
        obj.style.backgroundColor = "";
    }
}