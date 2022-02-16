const sequelize = require('../config/connection');
const { Genre } = require('../models');

const genredata = [
    {
        name: 'Sports'
    },
    {
        name: 'Fighting'
    },
    {
        name: 'Shooting'
    },
    {
        name: 'Adventure'
    }
]

const seedGenre = () => Genre.bulkCreate(genredata);

module.exports = seedGenre;