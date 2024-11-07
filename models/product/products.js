const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:  { type: String},
    sku: { type: String},
    partialSku: { type: String , unique: true},
    enTitle:String,
    description:String,
    brandId:String,
    catId:String,
    config:String,
    filters:{type:Object,default:{}},
    uploadImage:String,
    imageUrl: { type:String},
    thumbUrl: {type:String},
    imgGallery:String,
    imgGalleryUrl:{type:String},
    categories:{ type:String},
    subItem:{ type:Array},
})
module.exports = mongoose.model('product',ProductSchema);