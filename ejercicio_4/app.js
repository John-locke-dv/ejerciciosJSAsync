
const obtenerPokemon = require("./library");
obtenerPokemon("Squirtle").then(Data => {
    console.log("Nombre: " + data.name);
    console.log("Habilidades: ")
    Data.abilities.forEach(k => console.log(k.ability.name));
});
// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon();



