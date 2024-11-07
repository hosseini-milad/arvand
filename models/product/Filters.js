const mongoose = require('mongoose');

const FilterSchema = new mongoose.Schema({
    title:  String,
    enTitle:String,
    type:String,
    category:String,
    sort:String,
    data:{type:Date,default:Date.now()}
})
module.exports = mongoose.model('filters',FilterSchema);