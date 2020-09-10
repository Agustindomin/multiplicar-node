// AHORA separamos la lógica en el script: multiplicar/multiplicar.js, objeto global module

// console.log(module);

// const multiplicar = require('./multiplicar/multiplicar'); // el .js no hace falta, ya se sabe
// console.log(multiplicar);

// destructuracion
const { crearArchivo } = require('./multiplicar/multiplicar'); // el .js no hace falta, ya se sabe

// let base = 'abc';
let base = '7';

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));