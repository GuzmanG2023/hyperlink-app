const sequelize = require('../config/connection');
const { Post } = require('../models');

const postdata = [
    {
        title: 'test_title1',
        post_data: 'Looking for CoD group',
        game_id: '1',
        system_id: '1',
        genre_id: '1'
    },

    {
        title: 'test_title2',
        post_data: 'Looking for Halo group',
        game_id: '2',
        system_id: '2',
        genre_id: '2'
    },
]

// bulk create post 
const seedPost = () => Post.bulkCreate(postdata);

// export 
module.exports = seedPost;
