
const mongoose = require('mongoose');



const {Schema} = mongoose; 
const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A title is required.'], minLength: [1, 'Minimum length for the title is 1 character.']
    },
   
    author: {
        type: String,
        required: [true, 'The author\'s name is required'], minLength: [3, 'The minimum length is 3 characters.'],
    },
    price: {
        type: Number,
        required: [true, 'The price is required.'],
        min: [1, 'The minimum price is $1.']
    },
    numSold: {
        type: Number,
        min: [0, 'The minimum number of copies sold is 0.'] 
}
});

const Book = mongoose.model('Book', bookSchema)

module.exports = Book; 