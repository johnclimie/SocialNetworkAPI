const { Schema, model } = require('mongoose');

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
            // Use a getter to format the timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: {
            // Array of nested documents created with the reactionSchema
        }
    }
)