const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'I love that game',
        user_id: 1,
        post_id: 1,
        post_date: '2022-01-01'
    },
    
    {
        comment_text: 'That game sucks',
        user_id: 2,
        post_id: 2,
        post_date: '2022-02-01'
    }
]

// bulk create post 
const seedComment = () => Comment.bulkCreate(commentdata);

// export
module.exports = seedComment;

