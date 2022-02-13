const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

// get users
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_data',
            'post_date',
            'game_id',
            'system_id', 
            'genre_id',
            'user_id'
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        res.status(500).json(err);
    });
})

// get post by id
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'post_data',
            'post_date',
            'game_id',
            'system_id', 
            'genre_id',
            'user_id'
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// add new post
// TODO: add authentication to post. Only logged in users should be able to add data
// router.post('/', (req, res) => {
//     Post.create({
//         title: req.body.title,
//         post_data: req.body.post_data,
//         post_date: req.body.post_date,
//         game_id: req.body.game_id,
//         system_id: req.body.system_id,
        
//     })
// })

module.exports = router;