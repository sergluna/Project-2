const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
var crypto = require('crypto');
const db = require('../seeds/userData.json');

passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {
        if (err) { return cb(err); }
        if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }


    });
}));