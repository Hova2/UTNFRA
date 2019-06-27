var pe = [
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

/*personas.forEach(function(elemento){
    elemento.edad *= 2; 
});

console.log(personas);*/
/*console.log(
    personas.filter(function(p){
        return p.edad < 30;
    }).map(function(p){
        return p.nombre;
    }).reduce(function(prev,actual){
        return prev += actual.length;
    },0)
);*/

console.log(pe.filter(p=>p.edad < 30).map(p=> p.nombre).reduce((x,a)=>x += a.length,0));


