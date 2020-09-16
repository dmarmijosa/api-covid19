const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre del pais que desea obtener los datos de covid 19',
        demand: true
    }
}).argv;

lugar.getCasos(argv.direccion)
    .then(console.log);