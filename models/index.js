const Game = require('./Game');
const Platform = require('./Platform');
const User = require('./User');
const Post = require('./Post');
const Genre = require('./Genre');
const Comment = require('./Comment');

// one to many association: user -> post
User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User);

// one to many association: post -> comment
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post);

// One to many association: user -> comment
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User);

// one to many association: game -> post 
Game.hasMany(Post, {
    foreignKey: 'game_id'
});

Post.belongsTo(Game);

// one to many association: Platform -> game
Platform.hasMany(Game, {
    foreignkey: 'platform_id'
});

Game.belongsTo(Platform);

// one to many association: genre -> game
Genre.hasMany(Game, {
    foreignKey: 'genre_id'
})

Game.belongsTo(Genre);

// one to many association: Platform -> post
Platform.hasMany(Post, {
    foreignKey: 'platform_id'
});

Post.belongsTo(Platform);

// one to many association: genre -> post
Genre.hasMany(Post, {
    foreignKey: 'genre_id'
})

Post.belongsTo(Genre);


module.exports = { Game, Platform, User, Post, Genre, Comment }
