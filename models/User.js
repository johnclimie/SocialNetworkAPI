// Uses Mongoose to create schema
const { Schema, model } = require('mongoose');

// Creates a schema for users
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
        match: /.+\@.+\..+/
    }, 
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
});

// Creates virtual property to count the amount of friends
userSchema
    .virtual('friendCount')
    .get(function () {return this.friends.length
});

// Creates user model based on user schema
const User = model('user', userSchema);

// Exports user model
module.exports = User;