const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Actor = new Schema(
    {
        movie: [{ type: Schema.Types.ObjectId, ref: 'movie' }],
        role: [{ type: Schema.Types.ObjectId, ref: 'role' }],

        name: { type: String, required: true },
        image: { type: String, required: true},
    },
    { timestamps: true }
    );

module.exports =  Actor;