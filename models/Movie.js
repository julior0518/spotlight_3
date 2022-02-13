const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true},
        budget: { type: Number, required: false } 

    },
    { timestamps: true }
    );

module.exports =  Movie;