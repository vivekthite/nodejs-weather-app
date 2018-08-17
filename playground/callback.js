var getUser = (id , callback) => {
    console.log('in getUser');
    var user = {
        id: id,
        name : 'Vikram'
    };

    setTimeout(() => {
        callback(user);
    },3000);

    
}


getUser(34,(user) => {
    console.log('In callback');
    console.log(user);
})