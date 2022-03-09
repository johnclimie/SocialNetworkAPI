// Uses express to route server
const router = require('express').Router();

// Points to files in same folder
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Uses JS files for routing
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes)

// Exports router
module.exports = router;