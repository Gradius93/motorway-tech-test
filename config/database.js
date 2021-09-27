const Sequelize = require('sequelize')

module.exports = new Sequelize('vehiclesDB', 'postgres', 'S34n', {
    host: 'localhost',
    dialect: 'postgres' 
  });
