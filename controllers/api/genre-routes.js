const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Genre } = require('../../models');
const withAuth = require('../../utils/auth');

// get users
router.get('/', (req, res) => {
    Genre.findAll({
        attributes: [
            'id', 
            'name'
        ]
    })
    .then(dbGenreData => res.json(dbGenreData))
    .catch(err => {
        res.status(500).json(err);
    })
})

// get genre by id
router.get('/:id', (req, res) => {
    Genre.findOne({
        attributes: [
            'id', 
            'name'
        ]
    })
    .then(dbGenreData => {
        if (!dbGenreData) {
            res.status(400).json({ message: 'No genre found with this id' });
            return;
        }
        res.json(dbGenreData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// add new genre
router.post('/', withAuth, (req, res) => {
    Genre.create({
        name: req.body.name,
        system_id: req.body.system_id,
        release_year: req.body.release_year,
        publisher: req.body.publisher,
        genre_id: req.body.genre_id
    })
    .then(dbGenreData => res.json(dbGenreData))
    .catch(err => {
        res.status(500).json(err);
    })
})

// update genre
router.put('/:id', (req, res) => {
    Genre.update(
        {
            name: req.body.title,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbGenreData => {
        if (!dbGenreData) {
            res.status(400).json({ message: 'Np genre found with this id' });
            return;
        }
        res.json(dbGenreData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// delete genre
router.delete('/:id', withAuth, (req, res) => {
    Genre.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbGenreData => {
        if (!dbGenreData) {
            res.status(400).json({ message: 'No genre found with this id' });
            return; 
        }
        res.json(dbGenreData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;