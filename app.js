const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

const Sequelize = require('sequelize')

const db = new Sequelize('vehiclesDB', 'postgres', 'S34n', {
    host: 'localhost',
    dialect: 'postgres' 
  });

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))


const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('INDEX'))

app.listen(PORT, console.log(`Server started on port ${PORT}`))