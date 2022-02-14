const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Game } = require('../../models');
const withAuth = require('../../utils/auth');

// get users
router.get('/', (req, res) => {
    Game.findAll({
        attributes: [
            'id', 
            'name', 
            'system_id', 
            'release_year', 
            'publisher', 
            'genre_id'
        ]
    })
    .then(dbGameData => res.json(dbGameData))
    .catch(err => {
        res.status(500).json(err);
    })
})

// get game by id
router.get('/:id', (req, res) => {
    Game.findOne({
        attributes: [
            'id', 
            'name', 
            'system_id', 
            'release_year', 
            'publisher', 
            'genre_id'
        ]
    })
    .then(dbGameData => {
        if (!dbGameData) {
            res.status(400).json({ message: 'No game found with this id' });
            return;
        }
        res.json(dbGameData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// add new game
router.post('/', withAuth, (req, res) => {
    Game.create({
        name: req.body.name,
        system_id: req.body.system_id,
        release_year: req.body.release_year,
        publisher: req.body.publisher,
        genre_id: req.body.genre_id
    })
    .then(dbGameData => res.json(dbGameData))
    .catch(err => {
        res.status(500).json(err);
    })
})

// update game
router.put('/:id', (req, res) => {
    Game.update(
        {
            title: req.body.title,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbGameData => {
        if (!dbGameData) {
            res.status(400).json({ message: 'Np game found with this id' });
            return;
        }
        res.json(dbGameData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// delete game
router.delete('/:id', withAuth, (req, res) => {
    Game.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbGameData => {
        if (!dbGameData) {
            res.status(400).json({ message: 'No post found with this id' });
            return; 
        }
        res.json(dbGameData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;