const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Role = new Schema(
    {
        movie: [{ type: Schema.Types.ObjectId, ref: 'movie' }],
        name: { type: String, required: true },
        description: { type: String, required: true },
        age: { type: Number, required: true},
        ethnicity: { type: String, required: false } ,
        category: { type: String, required: true }
    },
    { timestamps: true }
    );

module.exports =  Role;