const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        system_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'system',
                key: 'id'
            }
        },

        release_year: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        publisher: {
            type: DataTypes.STRING,
            allowNull: true
        },

        genre_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'genre',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game'
    }
)

module.exports = Game;
