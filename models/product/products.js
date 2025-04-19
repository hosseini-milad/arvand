const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:  { type: String},
    sku: { type: String,unique:true},
    ItemID: { type: String,unique:true},
    enTitle:String,
    filters:{type:Object,default:{}},
    size:String,
    weight:String,
    length:String,
    grade:String,
    masterSku:String,
    masterName:String
})
module.exports = mongoose.model('product',ProductSchema);