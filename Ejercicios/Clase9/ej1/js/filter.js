var vec = [2,3,4,6,8];

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

console.log(personas.filter(function (p){
    return p.nombre === 'Juan';
}));

var pares = [];

/*for (var i = 0 ; i < vec.length ; i++){
    if(!(vec[i] % 2)){
        pares.push(vec[i]);
    }
}*/

/*var pares = vec.filter(function(elemento){
    return elemento % 2 == 0;
})*/

//console.log(pares);