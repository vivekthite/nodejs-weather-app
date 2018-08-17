console.log('Starting app');

setTimeout(() => {

console.log('In callback with 2 ms timeout');

},2000);


setTimeout(() => {

    console.log('In callback with 0 ms timeout');
    
    },0);

console.log('Finishing app');