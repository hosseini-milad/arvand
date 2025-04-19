const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  userId:{type: String},
  manageId: {type: String},
  orderNo:{type:String},
  mobile:{type:String},
  company:{type:String},
  payMethod:{type:String},
  volume:{type:String},
  reason:{type:String},
  imageUrl:{type:String},
  loadDate:{ type: Date ,default:Date.now()}, 

  orderPrice:{type:String},
  orderCount:{type:String},
  orderItems:[{type:Array}],
  status:{ type: String },
  payStatus: {type: String},
  description:{ type: String },
  transport:{ type: String },
  date:{ type: Date ,default:Date.now()}, 
  progressDate:{ type: Date ,default:Date.now()},
});

module.exports = mongoose.model("orders", OrdersSchema);