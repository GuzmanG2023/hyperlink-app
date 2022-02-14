// const router = require('express').Router();
// const homeRoutes = require('./home-routes.js');

// router.use('/', homeRoutes);

// module.exports = router;


const router = require('express').Router();

// TODO: import remaining api subsets
const apiRoutes = require('./api/');

// TODO: import remaining api subsets
router.use('/api', apiRoutes);

module.exports = router;