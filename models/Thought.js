// Uses Mongoose to create schema
const { Schema, model } = require('mongoose');
// Uses reaction schema to enter a property
const Reaction = require('./Reaction');

// Creates a schema for thoughts
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (dateVal) => dateVal.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

// Creates virtual property to count the amount of reactions
thoughtSchema
    .virtual('reactionCount')
    .get(function () {return this.reactions.length
});

// Creates thought model based on thought schema
const Thought = model('thought', thoughtSchema);

// Exports thought model
module.exports = Thought;