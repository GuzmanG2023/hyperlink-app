const router = require('express').Router();

// import api routes
const postRoutes = require('./post-routes');
// TODO: add other table specific api call routes

router.use('/posts', postRoutes);

module.exports = router;