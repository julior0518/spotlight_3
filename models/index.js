const mongoose = require('mongoose');
const MovieSchema = require('./Movie');

const Movie = mongoose.model('movies', MovieSchema);

module.exports = {
    Movie
};