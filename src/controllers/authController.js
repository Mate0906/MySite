const User = require('../models/userModel');

exports.register = (req, res) => {
    const { email, password } = req.body;
    
    // Ellenőrizzük, hogy az email cím már létezik-e
    User.findByEmail(email, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            // Ha az email cím már létezik, visszairányítjuk a regisztrációs oldalra
            res.redirect('/register.html?error=Email already exists');
        } else {
            // Ha az email cím nem létezik, hozzáadjuk az új felhasználót
            User.create({ email, password }, (err, result) => {
                if (err) throw err;
                // Sikeres regisztráció után átirányítjuk az index oldalra
                res.redirect('/');
            });
        }
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, (err, results) => {
        if (err) throw err;
        if (results.length > 0 && results[0].password === password) {
            // Sikeres bejelentkezés után átirányítjuk az index oldalra
            res.redirect('/');
        } else {
            res.redirect('/login.html?error=Invalid credentials');
        }
    });
};