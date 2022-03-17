const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    funktion: String,
    stunden: Number,
    datum: String,
    beginn: String,
    ende: String
});

module.exports = mongoose.model('Dienst', schema);
