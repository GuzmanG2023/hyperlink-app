const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class System extends Model {}

System.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'system'
    }
)

module.exports = System;