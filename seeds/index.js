const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

// create wrapper function for all seed js files
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------------');
    await seedUsers();
}

// call wrapper function
seedAll();
