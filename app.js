const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async() => {

    try {
        let coord = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima en ${coord.direccion} es de ${temp} centígrados`;
    } catch (error) {
        return `No se pudo determinar el clima en ${argv.direccion}`;
    }
}
getInfo(argv.direccion)
    .then(message => console.log(message))
    .catch(e => console.log(e));