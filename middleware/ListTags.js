const users = require("../models/auth/users")
const profiles = require("../models/auth/ProfileAccess");
const tagproduct = require("../models/product/tagproduct");
const { search } = require("../router/panelProductApi");
const tag = require("../models/product/tag");
var ObjectID = require('mongodb').ObjectID;

const ListTags=async(sku,search)=>{
    const tagData = await tagproduct.find({sku:sku})
    const allTags = await tag.find(search?
        {title:new RegExp('.*' + search + '.*')}:{})
    return({data:tagData,all:allTags})
}

module.exports =ListTags