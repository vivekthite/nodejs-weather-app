const somePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        //reject('Hey it did not work');
        resolve('Hey it is working');
    },2500);
    
});


somePromise.then((result) => {
    console.log('Success : '+result);
},(error) => {
    console.log("Error : "+error);
});