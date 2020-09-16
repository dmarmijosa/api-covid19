const axios = require('axios');


const getCasos = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://covid-193.p.rapidapi.com/statistics?country=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'a713f3a1a3mshad49a288b69d97ep11a6a7jsn3cc9e44f6255' }
    });

    const res = await instance.get();
    if (res.data.response.length === 0) {
        throw new Error(`no hay resultado para ${direccion}`)
    }
    const data = res.data.response[0];
    const country = data.country;
    const cases = data.cases;
    const deaths = data.deaths;
    const tests = data.tests;

    return {
        country,
        cases,
        deaths,
        tests



    }

}

module.exports = {
    getCasos
}