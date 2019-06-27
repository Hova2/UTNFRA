var vec = [2,3,4,5,6,7,8,9];

var contador = 0;

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

/*for (var i = 0 ; i < vec.length ; i++){
    contador += vec[i];
}

console.log("Total: " + contador);*/

/*console.log(vec.reduce(function(prev,actual,indice){
    console.log("Previo: " + prev + " actual: " + actual + " indice: " + indice);
    return prev + actual;
}, 0));*/

/*console.log(vec.reduce(function(prev,actual){
    return prev + actual;
}, 0));*/

console.log(personas.reduce(function(prev,actual){
    prev.total += actual.edad;
    return prev;  
}, {total:0}));