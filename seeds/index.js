const seedUsers = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');
const seedGame = require('./game-seeds');
const seedSystem = require('./system-seeds');
const seedGenre = require('./genre-seeds');

const sequelize = require('../config/connection');

// create wrapper function for all seed js files
const seedAll = async () => {
    await sequelize.sync({ force: true });

    // system
    await seedSystem();

    // genre
    await seedGenre();

    // game
    await seedGame();


    console.log('--------------------');
    await seedUsers();
    console.log('--------------------');

    // post
    await seedPost();

    // comment
    await seedComment();

    process.exit(0);
}

// call wrapper function
seedAll();
