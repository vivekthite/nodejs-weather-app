const request = require('request');

const getGeoCode = (address) => {

    return new Promise((resolve,reject) => {
        const encodedAddress = encodeURIComponent(address);

        request({
            uri: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,
            json: true    
        },
        (error, response, body) => {
            //console.log('error:', JSON.stringify(error,undefined,2)); // Print the error if one occurred
            //console.log('response:', JSON.stringify(response,undefined,2))
            //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            //console.log('body:', JSON.stringify(body,undefined,2)); // Print the HTML for the Google homepage.
            //console.log('body:', JSON.stringify(body));
            if(error){
                reject("Unable to connect google map server");
            }else if(body.status === 'ZERO_RESULTS'){
                reject("Address not found");
            }else if(body.status === 'OK'){
                resolve({
                    address : body.results[0].formatted_address,
                    lat : body.results[0].geometry.location.lat,
                    lang : body.results[0].geometry.location.lng 
                });
            }
            
        });
    });

   
};

module.exports = {
    getGeoCode
}