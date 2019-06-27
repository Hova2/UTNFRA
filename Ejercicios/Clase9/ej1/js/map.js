var vec = [2,4,6,8];
var personas = [
    {nombre:"Juan",
       edad: 20
    },
    {nombre:"Brino",
      edad: 26
    },
    {nombre:"Toti",
      edad: 30
    }
];

//var nombres = personas.map(traerNombre);

console.log(personas.map(p=>p.nombre));

/*function traerNombre(persona){
    return persona.nombre;
}*/

//console.log(nombres);

/*console.log(vec.map(function (valor, indice){
    console.log("Valor: " + valor + " Indice: " + indice);
    return valor * 2;
}));*/

/*console.log(vec.map(function (valor, indice){
    return valor * 2;
}));*/

//console.log();