const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'topgamer1',
        email: 'test1@email.com',
        password: 'password123'
    },

    {
        username: 'MC_Champ',
        email: 'newuser@email.com',
        password: 'password321'
    }
];

// bulk create user
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;