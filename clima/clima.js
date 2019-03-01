const axios = require('axios');

const getClima = async(lat, lng) => {
    let appId = '536a216fadf13853b8b73e739dddc401';
    let endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${appId}`;
    let resp = await axios.get(endPoint);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciudad');
    };
    return resp.data.main.temp;
};

module.exports = {
    getClima
}