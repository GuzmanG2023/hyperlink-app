const seedUsers = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

// create wrapper function for all seed js files
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------------');
    await seedUsers();
    console.log('--------------------');

    // game

    // system

    // post
    await seedPost();

    // comment
    await seedComment();

    process.exit(0);
}

// call wrapper function
seedAll();
