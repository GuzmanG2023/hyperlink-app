const sequelize = require('../config/connection');
const { Platform } = require('../models');


const platformdata = [ 
    {
        name: 'playstation 5'
    },
    {
        name: 'xbox x'
    },
    {
        name: 'pc'
    }
]

const seedPlatform = () => Platform.bulkCreate(platformdata);

module.exports = seedPlatform;