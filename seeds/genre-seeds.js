const sequelize = require('../config/connection');
const { Genre } = require('../models');

const genredata = [
    {
        name: 'Sports'
    },
    {
        name: 'Fighting'
    }
]

const seedGenre = () => Genre.bulkCreate(genredata);

module.exports = seedGenre;