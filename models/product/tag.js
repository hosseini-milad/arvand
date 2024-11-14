const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const TagSchema = new Schema({
    title:  String,
    enTitle:String,
    description: String,
    tagCode:String,
    active:{type:Boolean,default:true}
})
module.exports = mongoose.model('tag',TagSchema);