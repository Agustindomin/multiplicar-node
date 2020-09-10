// destructuracion
const { crearArchivo } = require('./multiplicar/multiplicar'); // el .js no hace falta, ya se sabe

// AHORA recibimos el parametro base, desde la linea de comandos, objeto global process
// console.log(process.argv);

// recibimos el array de argumentos pasado por consola
let argv = process.argv;
let parametro = argv[2]; // el primer parametro está en la posicion 2 del array argv
let base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));