const sequelize = require('../config/connection');
const { Friend } = require('../models');

const frienddata = [
    {
        user_id1: 1,
        user_id2: 2,
        status: 1
    },

    {
        user_id1: 2,
        user_id2: 1,
        status: 1
    }
]

const seedFriend = () => Friend.bulkCreate(frienddata);

module.exports = seedFriend;