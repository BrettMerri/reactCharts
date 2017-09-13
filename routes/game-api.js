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
                if(err) throw err;
                
                // If user does not exist via display name from API
                if(typeof user === 'undefined') {
                    return res.json({"Error" : "Invalid display name"});
                }
                return res.json({msg: 'User created', 'displayName': user.displayName, summonerId: user.summonerId});
            });
        } else {
            return res.json({msg: 'User exists', 'displayName': user.displayName, summonerId: user.summonerId});
        }
    });
});

module.exports = router;