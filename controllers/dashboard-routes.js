const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Friend} = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', (req, res) => {
  console.log('======================');

  // promise 1: posts
  let postCall = Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
        'id',
        'title',
        'post_data',
        'post_date',
        'game_id',
        'platform_id',
        'genre_id',
        [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
    ],
    include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'post_date'],
          include: {
              model: User,
              attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['id', 'username'],
          include: {
            model: Friend,
            attributes: ['user_id2']
          }
        }
    ]
  });

  // promise 2: userinfo
  let userCall = User.findAll({
    where: {
      id: req.session.user_id
    },
    attributes: ['id', 'username']
  });

  // promise 3: friendlist
  let userid = req.session.user_id;
  let friendsList = sequelize.query(`
    SELECT 
      friend.user_id2,
      user.username
    FROM friend 
    LEFT JOIN user
    ON user.id = friend.user_id2
    WHERE user_id1 = ${userid}
    AND request = 1`, 
    { raw: true })

  // wrapper for promises to finish
  Promise.all([postCall, userCall, friendsList])
  
  .then((data) => {
    const posts = data[0].map(post => post.get({ plain: true }));
    let single_user = data[1][0].get({ plain: true });
    let friends = data[2][0]
    console.log(friends);
    res.render('dashboard', { posts, loggedIn: true, single_user, friends});
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
        'id',
        'title',
        'post_data',
        'post_date',
        'game_id',
        'platform_id',
        'genre_id',
        [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
    ],
    include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'post_date'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
    ]
})
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;