const Sequelize = require('sequelize')

const db = require('../config/database')

const Vehicle = db.define('vehicle', {
    make: {
        type: Sequelize.STRING
    },
    model: {
        type: Sequelize.STRING
    }
})

module.exports = Vehicle;