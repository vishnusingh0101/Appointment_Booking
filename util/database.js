const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointments', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;