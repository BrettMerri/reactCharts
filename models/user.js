const mongoose = require('mongoose');
const config = require('../config/database');
const apikeys = require('../config/apikeys');
const fetch = require('node-fetch');

// User Schema
const UserSchema = mongoose.Schema({
    displayName: String,
    accountId: String
});

const UserModel = module.exports = mongoose.model('UserModel', UserSchema);

module.exports.getUserByDisplayName = (displayName, callback) => {
    const query = {displayName: displayName}
    UserModel.findOne(query, callback);
}

module.exports.addUserByDisplayName = (displayName, callback) => {
    // This API call gets the user's accountId which we need to save to Mongo for future api requests
    fetch(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${displayName}?api_key=${apikeys.lol}`)
    .then(res => res.json())
    .then(data => {
        let newUser = new UserModel({
            displayName: data.name,
            accountId: data.accountId
        });
        newUser.save(callback);
    });
}