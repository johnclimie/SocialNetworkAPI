// Sets up express, the database, and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Sets PORT and creates express app
const PORT = 3001;
const app = express();

// Uses url encoding, json and routes folder
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Server listener
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server is running on port ${PORT}`);
    });
});