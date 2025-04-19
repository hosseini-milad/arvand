const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const MasterSchema = new Schema({
    title:  { type: String},
    enTitle:String,
    productUrl:String,
    sku:{type:String,unique:true},
    description:String,
    catCode:String,
    brandCode:String,
    uploadImage:String,
    imageUrl: { type:String},
    thumbUrl: {type:String},
    imgGallery:String,
    imgGalleryUrl:{type:String},
    category:{ type:String},
    category2:{ type:String},
    tag1:{ type:String},
    tag2:{ type:String},
    tag3:{ type:String},
    tag4:{ type:String},
    tag5:{ type:String}
})
module.exports = mongoose.model('master',MasterSchema);