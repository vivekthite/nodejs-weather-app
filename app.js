const geocode = require('./geocode/geocode');
const yargs = require('yargs');
const weather = require('./weather/weather')

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

//get the weather for given address.
geocode.getGeoCode(argv.address)
    .then((result) => {
        return weather.getWeather(result.lat,result.lang);
    })
    .then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    })
    .catch((error) => {
        console.log(error);
    })
    ;

