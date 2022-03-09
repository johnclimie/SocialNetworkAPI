// Uses Mongoose NPM
const { connect, connection } = require('mongoose');

//Creates and connects to MongoDB
connect('mongodb://localhost/socialNetworkApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Exports connection
module.exports = connection;