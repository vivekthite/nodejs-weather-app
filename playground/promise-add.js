const asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject('Arguments must be numbers');
            }
        },1500);        
    });
};


asyncAdd(2,3)
    .then((result) => {
            console.log(result);
            return asyncAdd(7,result);
        })
    .then((result) => {
        console.log(result);
        //return asyncAdd(7,result);
        })
    .catch((error) => {
        console.log(error);
    })    
    ;    

