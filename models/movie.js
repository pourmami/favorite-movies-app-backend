const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Movie = sequelize.define('movie', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    genre: Sequelize.STRING,
    description: Sequelize.TEXT,
    userId: Sequelize.INTEGER,
})

module.exports = Movie