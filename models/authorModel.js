
const mongoose = require('mongoose');

const {Schema} = mongoose; 
const authorSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'The author\'s first name is required.'], minLength: [1, 'Minimum length for the title is 1 character.']
    },
   
    lastName: {
        type: String,
        required: [true, 'The author\'s last name is required'], minLength: [1, 'The minimum length is 1 character.'],
    },
    birthYear: {
        type: Number,
        required: [true, 'The birth year is required.'],
        minLength: [4, 'The minimum length is 4 digits.']
    },
    bio: {
        type: String,
        
    }

});

const Author = mongoose.model('Author', authorSchema)

module.exports = Author; 