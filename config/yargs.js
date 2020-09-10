// Config para yargs

const opts = {
    base: { // parametros después del comando que puede recibir y los customizamos
        demand: true, // el parametro base es obligatorio
        alias: 'b' // alias para el parametro base
    },
    limite: {
        alias: 'l',
        default: 10, // Limite no es obligatorio y por defecto es 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help() // ayuda proporcionada por yargs
    .argv;

// exportamos argv para poder usarlo fuera de este script
module.exports = {
    argv
}