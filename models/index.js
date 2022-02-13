const mongoose = require('mongoose');
const MovieSchema = require('./Movie');
const RoleSchema = require('./Role');


const Movie = mongoose.model('movies', MovieSchema);
const Role = mongoose.model('roles', RoleSchema);


module.exports = {
    Movie,
    Role
};