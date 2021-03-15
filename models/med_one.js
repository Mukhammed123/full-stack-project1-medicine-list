const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const sheetSchema = new Schema({
    number: String,
    name: String,
    price: Number,
    hicode: String,
    classFirstStroke: String,
    remark: String,
    composition: String,
});

// Create Model
const sheetOne = mongoose.model('sheet-one', sheetSchema);

module.exports = sheetOne;