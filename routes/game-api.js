const express = require('express');
const router = express.Router();
const config = require('../config/database');
const apikeys = require('../config/apikeys');
const fetch = require('node-fetch');
const UserModel = require('../models/user');

router.get('/lol/username/:username', (req, res) => {
    let displayName = req.params.username;

    // Gets user by displayName from Mongo DB
    UserModel.getUserByDisplayName(displayName, (err, user) => { 
        if(err) throw err;
        
        // If user doesn't exist add user to Mongo DB
        if(!user) {
            UserModel.addUserByDisplayName(displayName, (err, user) => {
                res.json({msg: 'User created', accountId: user.accountId});
            });
        } else {
            res.json({msg: 'User exists', accountId: user.accountId});
        }
    });
});

module.exports = router;