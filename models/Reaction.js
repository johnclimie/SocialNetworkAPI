// Uses Mongoose to create schema
const { Schema, Types } = require('mongoose');

// Creates schema for reaction
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        }, 
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (dateVal) => dateVal.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
    }
);

// Exports schema
module.exports = reactionSchema;