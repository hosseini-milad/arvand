const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const BrandSchema = new Schema({
    title:  String,
    enTitle:String,
    imageUrl: String,
    link: String,
    description: String,
    fullDesc: String,
    brandCode:String,
    active:{type:Boolean,default:true},
    store: String,
})
module.exports = mongoose.model('brands',BrandSchema);