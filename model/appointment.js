const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
        
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phonenumber: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    }
});

module.exports = User;