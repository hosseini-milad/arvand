const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const SubProductSchema = new Schema({
    sku: { type: String },
    ItemID:{ type: String , unique: true},
    imageUrl: { type:String},
    thumbUrl: {type:String},
    filter: {type:Object}, 
    value:{type:String},
    perBox:Number
})
module.exports = mongoose.model('subproduct',SubProductSchema);