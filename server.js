const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.DB_URI, function(err) {
    console.log(err);
});
const routes = require('./routes/routes.js')(app, fs);
const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});