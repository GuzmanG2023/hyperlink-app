const router = require('express');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;