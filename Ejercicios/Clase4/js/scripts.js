//alert("hola mundo");

function saludar(){
    //alert("hola mundo");
    //document.write("<h1>Hola Mundo!!!!</h1>")
    //document.getElementById('p1').innerHTML = "Hola mundo";
    //console.log("Hola mundo");
    var cad = new String();
    var cadena = "Hola";
    var x = 23;
    var pi = 3.14;
    var d = true;
    var array = []; //Array literal.
    var arrayC = new Array(); //Array con constructor.
    var objeto = {}; //Objeto literal.
    var persona = {nombre: "Juan",edad:34};
    var fecha = new Date();
    var f = function sumar(){
        return 20;
    }
    var variable;
    var j = null;

    console.log(typeof j);
}

/*function unaFuncion(nombre){
    alert("Hola " + nombre);
}*/

//var x = unaFuncion;

/*var y = function (nombre){
    alert("Hola " + nombre);
}; //Funcion anonima */

//(function (nombre){ alert("Hola " + nombre);})('Juan Nieve'); Funcion autoinvocada

var otraFuncion = new Function("a","b","return a + b"); //Funcion construida como un objeto

//alert(otraFuncion(2,5));

/*function x(a,b){
    return a * b;
}

function y(a,b){
    if(!b){
        b=1;
    }
    
    return a * b;
}

alert(y());*/

/*var a = "1";
var b = 1;

console.log(a === b); // El === compara que los tipos de variables sean iguales.
console.log(a == b); // El == compara que los valores sean los mismos.*/

/*function x(){
    console.log(arguments);
}

x(23, "juan", 124, true);*/

var x;

var y = null;

console.log(typeof x);
console.log(typeof y);
console.log(x === y);