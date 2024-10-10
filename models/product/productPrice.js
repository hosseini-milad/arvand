const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductPriceSchema = new Schema({
    ItemID: String,
    stockID:String,
    price:String,
    discount:String,
    bulkPrice:String,
    bulkSize:Number,
    count:Number,
    existAlert:Number,
    perBox:Number,
    minSell:Number,
    date:{ type: Date }
})
module.exports = mongoose.model('productprice',ProductPriceSchema);