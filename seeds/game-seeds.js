const sequelize = require('../config/connection');
const { Game } = require('../models');


const gamedata = [ 
    {
        name: 'Nba 2k22',
        system_id: '1',
        release_year: '2022',
        publisher: '2K',
        genre_id: 'Sports'
    },
    {
        name: 'Mortal Kombat 11',
        system_id: '2',
        release_year: '2019',
        publisher: 'Warner Bros',
        genre_id: 'Fighting'
    }
]

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;