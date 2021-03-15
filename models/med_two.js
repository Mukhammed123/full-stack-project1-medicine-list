const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const sheetSchema = new Schema({
    number: String,
    name: String,
    price: Number,
    classFirstStroke: String,
    remark: String,
    composition: String,
});

// Create Model
const sheetTwo = mongoose.model('sheet-two', sheetSchema);

module.exports = sheetTwo;