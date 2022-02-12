const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'testname1',
        email: 'test1@email.com',
        password: 'password123'
    },

    {
        username: 'newuser1',
        email: 'newuser@email.com',
        password: 'password321'
    }
]

// bulk create user
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;