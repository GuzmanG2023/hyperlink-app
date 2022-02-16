const router = require('express').Router();

// import api routes
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const friendRoutes = require('./friend-routes');

// TODO: add other table specific api call routes

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/friends', friendRoutes);


module.exports = router;