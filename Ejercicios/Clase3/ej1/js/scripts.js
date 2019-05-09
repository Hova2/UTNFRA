window.onload = inicializarEventos;

function cambiarColor(){
    var h1=document.getElementById('miH1');
    h1.style.color="green";

}

function inicializarEventos(){

var imagen = document.getElementsByTagName('img')[0];
imagen.addEventListener('mouseover',function(e){

    e.target.setAttribute('src','./fabicon.jpg');

})


}