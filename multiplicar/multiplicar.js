// requires
const fs = require('fs'); // paquete nativo node de manejo de ficheros

//Usamos el paquete colors, hay que poner el paquete en cada script que lo use
const colors = require('colors');

let listarTabla = (base, limite = 10) => { // ponemos valor por defecto al partametro opcional limite

    return new Promise((resolve, reject) => {

        // comprobamos primero que base y limite sean un numero, si no no va a funcionar
        if (!Number(base)) {
            reject(`El valor base introducido: ${base}, no es un numero`);
            return; // esto es necesario porque reject y resolve NO SON return
        }

        if (!Number(limite)) {
            reject(`El valor limite introducido: ${limite}, no es un numero`);
            return; // esto es necesario porque reject y resolve NO SON return
        }

        console.log('================'.green);
        console.log(`== Tabla de ${base} ==`.green);
        console.log('================'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i} `);
        }

        resolve('Tabla Listada');
    });

}

// module.exports.crearArchivo = (base) => { Otra forma de crear un modulo
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        // comprobamos primero que base y limite sean un numero, si no no va a funcionar
        if (!Number(base)) {
            reject(`El valor base introducido: ${base}, no es un numero`);
            return; // esto es necesario porque reject y resolve NO SON return
        }

        if (!Number(limite)) {
            reject(`El valor limite introducido: ${limite}, no es un numero`);
            return; // esto es necesario porque reject y resolve NO SON return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-${limite}.txt`);
        });

    });

}

module.exports = { // con es6 no hace falta poner crearArchivo: crearArchivo
    crearArchivo,
    listarTabla
}