
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(x => console.log(x));

let prome2 = new Promise(function(persona, reject) {
    persona(obtenerPersonaFake(persona));
    reject('Error');
});

prome2.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
});