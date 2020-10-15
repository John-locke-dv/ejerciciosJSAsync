
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function funcionCallback (persona) {
    console.log(persona)
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido

obtenerPersonaFake(funcionCallback);
