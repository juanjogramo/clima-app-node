const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let apiKey = 'AIzaSyBk2LpCmdL-5W7xH_UdQO0qiiSpy8mI1f0';
    let encodedUrl = encodeURI(direccion);
    let googleEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${apiKey}`;

    let resp = await axios.get(googleEndpoint);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciudad: ', direccion);
    };
    let results = resp.data.results[0];
    let address = results.formatted_address;
    let location = results.geometry.location;
    return {
        direccion: address,
        lat: location.lat,
        lng: location.lng
    }
};

module.exports = {
    getLugarLatLng
}