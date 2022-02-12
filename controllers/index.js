<<<<<<< HEAD
const router = require('express');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.get('/', (req, res) => {
    res.render('homepage');
});
=======
const router = require('express').Router();

// TODO: import remaining api subsets
const apiRoutes = require('./api/');

// TODO: import remaining api subsets
router.use('/api', apiRoutes);
>>>>>>> 6cc666e38b6a50cfb542a910bfbf80113e349661

module.exports = router;