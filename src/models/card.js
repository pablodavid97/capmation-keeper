const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardModel = new Schema({
    title: String,
    text: String,
    color: String,
    active: Boolean,
    date_created: Date,
    date_modified: Date,
});

module.exports = mongoose.model('Card', cardModel);