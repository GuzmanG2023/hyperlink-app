const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Platform } = require('../../models');
const withAuth = require('../../utils/auth');

// get users
router.get('/', (req, res) => {
    Platform.findAll({
        attributes: [
            'id', 
            'name'
        ]
    })
    .then(dbPlatformData => res.json(dbPlatformData))
    .catch(err => {
        res.status(500).json(err);
    })
})

// get Platform by id
router.get('/:id', (req, res) => {
    Platform.findOne({
        attributes: [
            'id', 
            'name'
        ]
    })
    .then(dbPlatformData => {
        if (!dbPlatformData) {
            res.status(400).json({ message: 'No platform found with this id' });
            return;
        }
        res.json(dbPlatformData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// add new Platform
router.post('/', withAuth, (req, res) => {
    Platform.create({
        name: req.body.name,
        platform_id: req.body.platform_id,
        release_year: req.body.release_year,
        publisher: req.body.publisher,
        Platform_id: req.body.Platform_id
    })
    .then(dbPlatformData => res.json(dbPlatformData))
    .catch(err => {
        res.status(500).json(err);
    })
})

// update Platform
router.put('/:id', (req, res) => {
    Platform.update(
        {
            name: req.body.title,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPlatformData => {
        if (!dbPlatformData) {
            res.status(400).json({ message: 'Np Platform found with this id' });
            return;
        }
        res.json(dbPlatformData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// delete Platform
router.delete('/:id', withAuth, (req, res) => {
    Platform.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPlatformData => {
        if (!dbPlatformData) {
            res.status(400).json({ message: 'No platform found with this id' });
            return; 
        }
        res.json(dbPlatformData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;