const mongoose = require('mongoose');
const MovieSchema = require('./Movie');
const RoleSchema = require('./Role');
const ActorSchema = require('./Actor');



const Movie = mongoose.model('movies', MovieSchema);
const Role = mongoose.model('roles', RoleSchema);
const Actor = mongoose.model('actor', ActorSchema);


module.exports = {
    Movie,
    Role,
    Actor
};