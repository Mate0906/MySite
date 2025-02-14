const db = require('../db');

const User = {
    create: (userData, callback) => {
        const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(query, [userData.email, userData.password], callback);
    },
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], callback);
    }
};

module.exports = User;