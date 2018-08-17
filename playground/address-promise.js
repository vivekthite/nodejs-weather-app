const request = require('request');

const geoCodeAddress = (address) => {

    return new Promise((resolve,reject) => {

        const encodedAddress = encodeURIComponent(address);

        request({
            uri: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress,
            json: true    
        },
        (error, response, body) => {
           
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

   
}

geoCodeAddress('411009 pune')
    .then((result) => {
            console.log(result);
        })
    .catch((error) => {
        console.log(error);
    })
    ;