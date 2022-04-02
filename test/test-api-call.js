const axios = require("axios");

const options = {
    method: 'GET',
    //method: "POST",
    url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
    params: {q: 'San Francisco'},
    headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '151ab789b1mshde7d9ffd3359f21p1d4b08jsn2743f40ffe72'
    }
    // data: {} applying the request body here should work
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});