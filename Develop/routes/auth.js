const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
var crypto = require('crypto');
const db = require('../seeds/userData.json');
const { Router } = require('express');

passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {
        if (err) { return cb(err); }
        if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

//will add password info later when i have more knowledge on passport
    crypto.pbkdf2(password, row.salt, 31000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, row);
    });
    });
}));

Router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

module.exports = withAuth;