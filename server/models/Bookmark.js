const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookmarkSchema = new Schema({
    bookmarkDate: {
        type: Date,
        default: Date.now
    },
    cryptids: [{
        type: Schema.Types.ObjectId,
        ref: 'Cryptid'
    }]
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;