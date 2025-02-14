const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true
});

const createUser = async (userData) => {
    return await User.create(userData);
};

const findUserByUsername = async (username) => {
    return await User.findOne({ where: { username } });
};

const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

module.exports = {
    User,
    createUser,
    findUserByUsername,
    findUserByEmail
};