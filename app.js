// requires: hay 3 tipos
const fs = require('fs'); // Libreria propia de node, viene instalada
// const express = require('express'); // Paquete que hay que instalar con npm
// const propio_node = require('./node_script_creado_por_nosotros'); // paquete creado por nosotros

let base = 5;
let data = '';

/* TAREA, imprimir TABLA MULTIPLICAR en consola
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
......
*/
for (let i = 1; i <= 10; i++) {
    // console.log(`${base} * ${i} = ${base * i} `);
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

    if (err) throw err;

    console.log(`El archivo tabla-${base}.txt ha sido creado!`);
});