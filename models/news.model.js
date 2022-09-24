
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: String,
    desc: String,
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
}, {
    timesamps: true
});

module.exports = mongoose.model('news', schema);