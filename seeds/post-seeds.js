const sequelize = require('../config/connection');
const { Post } = require('../models');

const postdata = [
    {
        title: 'LFG Destiny',
        post_data: 'High tier player looking for a destiny group to run raids with. Available 7PM MST',
        post_date: '2022-01-01',
        game_id: 1,
        platform_id: 2,
        genre_id: 3,
        user_id: 1
    },

    {
        title: '1v1 me bro! - Mortal Combat',
        post_data: 'Looking to 1v1 on MC.  Hit me up',
        post_date: '2022-01-01',
        game_id: 2,
        platform_id: 1,
        genre_id: 2,
        user_id: 2
    },
]

// bulk create post 
const seedPost = () => Post.bulkCreate(postdata);

// export 
module.exports = seedPost;
