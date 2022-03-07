const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //Validating email
    }, 
    thoughts: {
        // array of _id values form Thought model
    },
    friends: {
        // array of _id values referenceing the User model
    }
})