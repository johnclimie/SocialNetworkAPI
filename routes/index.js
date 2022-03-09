// Uses express to route server
const router = require('express').Router();

// Uses API folder to access the api
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// Tells you 'Wrong route' if in the wrong route
router.use((req, res) => {
    return res.send('Wrong route!')
});

// Exports router
module.exports = router;