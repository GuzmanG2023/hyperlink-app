const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Platform } = require('../../models');
const withAuth = require('../../utils/auth');

// get users
router.get('/', (req, res) => {
    Platform.findAll({
        attributes: [
            
        ]
    })
})