const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Friend } = require('../../models');
const withAuth = require('../../utils/auth');

// get all friend requests
router.get('/', (req, res) => {
    Friend.findAll({
        attributes: [
            'id', 
            'user_id1', 
            'user_id2',
            'request'
        ]
    })
    .then(dbFriendData => res.json(dbFriendData))
    .catch(err => {
        res.status(500).json(err);
    })
})

// get friends list by specific user
router.get('/:id', (req, res) => {
    Friend.findAll({
        where: {
            user_id1: req.params.id
        },
        attributes: [
            'id', 
            'user_id1', 
            'user_id2',
            'request'
        ]
    })
    .then(dbFriendData => {
        if (!dbFriendData) {
            res.status(400).json({ message: 'No friends found for that userid' })
            return;
        }
        res.json(dbFriendData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// create new friend request
router.post('/', (req, res) => {
    Friend.create({
        request: req.body.request,
        user_id1: req.body.user_id1,
        user_id2: req.body.user_id2
    })
    .then(dbFriendData => res.json(dbFriendData))
    .catch(err => {
        // no target user_id2 found
        res.status(500).json(err);
    })
})

module.exports = router;