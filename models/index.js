const mongoose = require('mongoose');
const TacoSchema = require('./Taco');

const Taco = mongoose.model('tacos', TacoSchema);

module.exports = {
    Taco
};