const request = require('request');

const getWeather = (lattitude,longitude) => {    

    return new Promise((resolve,reject) => {
        request({
            uri: 'https://api.darksky.net/forecast/b3e6fcb9113367c26dc237ce1f1e3eb0/'+lattitude+','+longitude,
            json: true    
        },
        (error, response, body) => {
            //console.log('error:', JSON.stringify(error,undefined,2)); // Print the error if one occurred
            //console.log('response:', JSON.stringify(response,undefined,2))
            //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            //console.log('body:', JSON.stringify(body,undefined,2)); // Print the HTML for the Google homepage.
            //console.log('body:', JSON.stringify(body));
            if(!error && response.statusCode === 200){
                resolve({
                    temparature : body.currently.temperature,
                    apparentTemperature : body.currently.apparentTemperature
                });
            }else {
                reject('Unable to fetch weather');
            }
            
        });
    });

    
};

module.exports = {
    getWeather
}