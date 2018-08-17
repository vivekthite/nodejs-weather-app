const yargs = require('yargs');
const axios = require('axios');


const argv = yargs.options({
    a: {
        alias:'address',
        describe:'Address to fetch weather for',
        demand: true,
        string: true
    }
})
.help()
.alias('help','h')
.argv

console.log('Request to get weather for : '+argv.address);

const encodedAddress = encodeURIComponent(argv.address);
const geoCodeURL= 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress;

axios
    .get(geoCodeURL)
    .then((response) => {
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Address not found');
        }
        
        const lattitude = response.data.results[0].geometry.location.lat;
        const longitude = response.data.results[0].geometry.location.lng;
        const weatherURL = 'https://api.darksky.net/forecast/b3e6fcb9113367c26dc237ce1f1e3eb0/'+
                            lattitude+','+longitude;
        console.log('Formatted Address : '+response.data.results[0].formatted_address);
        console.log('weatherURL : '+weatherURL);
        return axios.get(weatherURL);
    })    
    .then((response) => {
        console.log(JSON.stringify(getWeatherJson(response,undefined,2)));
    })   
    .catch((error) => {
        if(error.code === 'ENOTFOUND'){
            console.log('Unable to connect to Google map server');
        }else{
            console.log(error.message);
        }
    })
    ;


    function getWeatherJson(response) {
        let weatherJson = {
            temparature : response.data.currently.temperature,
            apparentTemperature : response.data.currently.apparentTemperature
        }; 
        //console.log(addressJson);
        return weatherJson;
    };