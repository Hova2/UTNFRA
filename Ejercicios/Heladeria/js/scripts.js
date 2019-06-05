window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){
    document.getElementById('pHelado').addEventListener('click',cargarAccionesHelado,false);  
    document.getElementById('pVenta').addEventListener('click',cargarAccionesVenta,false);  
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