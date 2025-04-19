const mongoose = require('mongoose');

const FilterOptionSchema = new mongoose.Schema({
    filterId:  String,
    optionTitle:String,
    optionCode:{type:String},
    sort:Number,
    data:{type:Date,default:Date.now()}
})
module.exports = mongoose.model('filteroption',FilterOptionSchema);