const sequelize = require('../config/connection');
const { Game } = require('../models');

const gamedata = [ 
    {
        name: 'Destiny 2',
        platform_id: 2,
        release_year: 2017,
        publisher: 'Bungie',
        genre_id: 3

    },
    {
        name: 'Mortal Kombat 11',
        platform_id: 1,
        release_year: 2019,
        publisher: 'Warner Bros',
        genre_id: 2
    },

    {
        name: 'NBA 2K22',
        platform_id: 1,
        release_year: 2022,
        publisher: '2K',
        genre_id: 1
    },
    
    {
        name: 'Sea of Thieves',
        platform_id: 2,
        release_year: 2018,
        publisher: 'Online Games',
        genre_id: 4
    },

    {
        name: 'Final Fantasy XIV',
        platform_id: 3,
        release_year: 2010,
        pulisher: 'Square Enix',
        genre_id: 3
    }
]

const seedGame = () => Game.bulkCreate(gamedata);

module.exports = seedGame;