const sequelize = require('../config/connection');
const { System } = require('../models');


const systemdata = [ 
    {
        name: 'playstation 5'
    },
    {
        name: 'xbox x'
    }
]

const seedSystem = () => System.bulkCreate(systemdata);

module.exports = seedSystem;