const express = require('express');
const router = express.Router();
const config = require('../config/database');
const apikeys = require('../config/apikeys');
const fetch = require('node-fetch');
const LolData = require('../models/lolData');

router.get('/lol/displayname/:displayName?', (req, res) => {
    let displayName = req.params.displayName;

    if (!displayName) {
        return res.json({"Error": "No display name provided"});
    }

    // Gets lolData by displayName from MongoDB
    LolData.getUserByDisplayName(displayName, (err, lolData) => { 
        if(err) throw err;
        
        // If lolData doesn't exist add lolData to MongoDB
        if(!lolData) {
            LolData.addUserByDisplayName(displayName, (err, lolData) => {
                if(err) throw err;
                
                // If lolData does not exist via display name from API
                if(typeof lolData === 'undefined') {
                    return res.json({"Error" : "Invalid display name"});
                }
                return res.json({msg: 'LolData created', 'displayName': lolData.displayName, summonerId: lolData.summonerId});
            });
        } else {
            return res.json({msg: 'LolData exists', 'displayName': lolData.displayName, summonerId: lolData.summonerId});
        }
    });
});

router.get('/randomnumbers/count/:count', (req, res) => {
    let count = parseInt(req.params.count);

    if (!Number.isInteger(count)) {
        return res.json({"Error": "Invalid count"});
    }
    else {
        if (count > 50) count = 50;
        if (count < 1) count = 1;
        getRandomNumberData(count, data => {
            return res.json(data);
        });
    }
});

const getRandomNumberData = (count, callback) => {
    fetch(`https://qrng.anu.edu.au/API/jsonI.php?length=${count}&type=uint8`)
    .then(res => res.json())
    .then(data => callback(data.data));
};

module.exports = router;