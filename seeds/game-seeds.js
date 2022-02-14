const sequelize = require('../config/connection');
const { Game } = require('../models');

const gamedata = [ 
    {
        name: 'NBA 2K22',
        system_id: 1,
        release_year: 2022,
        publisher: '2K',
        genre_id: 1
    },
    {
        name: 'Mortal Kombat 11',
        system_id: 1,
        release_year: 2019,
        publisher: 'Warner Bros',
        genre_id: 2
    }
]

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;