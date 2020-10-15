
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste();

let prome = new Promise(function(chiste, reject) {
    chiste(obtenerChiste(chiste));
    reject('Error');
});

prome.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
});
