const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const TagProductSchema = new Schema({
    title:  String,
    sku:String,
    
})
module.exports = mongoose.model('tagproduct',TagProductSchema);