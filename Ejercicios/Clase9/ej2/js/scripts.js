/*$(document).ready(function(){
    alert("Hola Mundo");
})*/

$(document).ready(inicializarManejadores);

function inicializarManejadores(){
    $("#miH1").click(function(){
        //alert("Click en el H1");
        var h1 = $(this);
        $(this).css("color","blue");
        $(this).text("Otro texto");
        alert($(this).text());

    });

    var parrafos = $("p");
    $("#p1").attr("class","rojo");
    var rojos = $(".rojo");

    parrafos.click(cambiarTexto);
    rojos.click(function(){
        $(this).css("color","red");
    });

    $("div").html("<input type='text'>");

    alert($("#p1").attr("id"));

   

}

function cambiarTexto(){
    $(this).text("Me cambiaron");
}
