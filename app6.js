// Usamos la libreria Yargs para recuperar yu procesar los parametros pasados por la linea de comandos
// pero ahora lo cargamos de una librereia propia
const argv = require('./config/yargs').argv; // sólo nos interesa el objeto argv, no el objeto completo en /config/yargs.js

// destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // el .js no hace falta, ya se sabe

// recuperamos los comandos, esto es, palabras sin pareja, en el array _
let comando = argv._[0]; // solo vamos a tebrr una comando cada vez: listar ó crear 

switch (comando) { // procesamos los distintos comandos

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(mensaje => console.log(`${mensaje}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}


// console.log(argv);
// node app5 listar crear borrar --limite=20 -b 50
// {
//   _: [ 'listar', 'crear', 'borrar' ],
//   limite: 20,
//   l: 20,
//   b: 50,
//   base: 50,
//   '$0': 'app5'
// }

// console.log('base:', argv.base);
// console.log('limite:', argv.limite);