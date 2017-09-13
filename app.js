const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// Change Mongoose Promose Library from Bluebird to ES6
mongoose.Promise = global.Promise;

// Connect To Database
mongoose.connect(config.database, {
    useMongoClient: true
});

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const gameapi = require('./routes/game-api');

const app = express();

// Port Number
const port = 3001;

// CORS middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Game API's
app.use('/game-api', gameapi);

// Index Route
app.get('/', (req, res) => {
    res.send("Invalid Endpoint");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});