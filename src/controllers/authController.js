const User = require('../models/userModel');

exports.register = (req, res) => {
    const { email, password } = req.body;
    
    User.findByEmail(email, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.redirect('/register.html?error=Email already exists');
        } else {
            User.create({ email, password }, (err, result) => {
                if (err) throw err;
                res.redirect('/login.html');
            });
        }
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, (err, results) => {
        if (err) throw err;
        if (results.length > 0 && results[0].password === password) {
            req.session.user = results[0];
            res.redirect('/');
        } else {
            res.redirect('/login.html?error=Invalid credentials');
        }
    });
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) throw err;
        res.redirect('/');
    });
};