

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/carolsBookstore', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (error) => {
    if (error) {
        console.log('error with MongoDBs connectivity'); 
    } else {
        console.log('Successful connection with MongoDB Server');

    }

})

//Sample entry
// const bookSample = new Book({title:'The Kite Runner', author:'Khaled Hosseini', price:15, numSold:25000});
// bookSample.save()

