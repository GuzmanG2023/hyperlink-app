const router = require('express').Router();

// TODO: import remaining api subsets
const apiRoutes = require('./api/');

// TODO: import remaining api subsets
router.use('/api', apiRoutes);

module.exports = router;