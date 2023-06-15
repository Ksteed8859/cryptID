const mongoose = require('mongoose');

const { Schema } = mongoose;

const cryptidSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    alias: {
        type: String,
    },
    description: {
        type: String,
    },
    photo: {
        type: String,
    },
    photoCredits: {
        type: String,
    },
    location: {
        type: String,
    },
    wikiLink: {
        type: String,
    }
});

const Cryptid = mongoose.model('Cryptid', cryptidSchema);

module.exports = Cryptid;