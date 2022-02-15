const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Friend } = require('../../models');
const withAuth = require('../../utils/auth');

// get friends
router.get('/', (req, res) => {
    Friend.findAll({
        attributes: [
            'id', 
            'user_id1', 
            'user_id2',
            'status'
        ]
    })
    .then(dbFriendData => res.json(dbFriendData))
    .catch(err => {
        res.status(500).json(err);
    })
})

// get friend by specific user
router.get('/:id', (req, res) => {
    const friendsList = sequelize.query(
        ""
    )
})