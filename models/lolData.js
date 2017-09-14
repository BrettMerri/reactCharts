const mongoose = require('mongoose');
const config = require('../config/database');
const apikeys = require('../config/apikeys');
const fetch = require('node-fetch');

// User Schema
const LolDataSchema = mongoose.Schema({
    displayName: String,
    summonerId: String
});

const LolData = module.exports = mongoose.model('LolData', LolDataSchema, 'LolData');

module.exports.getUserByDisplayName = (displayName, callback) => {
    const query = {displayName: new RegExp('^'+displayName+'$', "i")};
    LolData.findOne(query, callback);
}

module.exports.addUserByDisplayName = (displayName, callback) => {
    // This API call gets the user's summonerId which we need to save to MongoDB for future api requests
    fetch(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${displayName}?api_key=${apikeys.lol}`)
    .then(res => res.json())
    .then(data => {

        // If the summoner is not found via the API callback without returning LolData
        if (typeof(data.status) !== 'undefined') {
            callback();
        }
        else { // If summoner is found save LolData to MongoDB and return LolData in callback
            
            let newLolData = new LolData({
                displayName: data.name,
                summonerId: data.id
            });
            newLolData.save(callback);
        }
    })
    .catch(err => console.log(err));
}