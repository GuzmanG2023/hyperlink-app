const router = require('express');
const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

router.get('/', (req, res) => {
    res.render('homepage');
});

// TODO: import remaining api subsets
const apiRoutes = require('./api/');

// TODO: import remaining api subsets
router.use('/api', apiRoutes);

module.exports = router;