const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const SubProductSchema = new Schema({
    sku: { type: String },
    ItemID:{ type: String , unique: true},
    imageUrl: { type:String},
    thumbUrl: {type:String},
    filter: {type:Object}, 
    perBox:Number,
    price:String
})
module.exports = mongoose.model('subproduct',SubProductSchema);