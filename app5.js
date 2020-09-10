// Usamos la libreria Yargs para recuperar yu procesar los parametros pasados por la linea de comandos
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: { // parametros después del comando que puede recibir y los customizamos
            demand: true, // el parametro base es obligatorio
            alias: 'b' // alias para el parametro base
        },
        limite: {
            alias: 'l',
            default: 10, // Limite no es obligatorio y por defecto es 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: { // parametros después del comando que puede recibir y los customizamos
            demand: true, // el parametro base es obligatorio
            alias: 'b' // alias para el parametro base
        },
        limite: {
            alias: 'l',
            default: 10, // Limite no es obligatorio y por defecto es 10
        }
    })
    .help() // ayuda proporcionada por yargs
    .argv;

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