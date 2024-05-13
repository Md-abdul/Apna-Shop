const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  image1: String,
  title: String,
  price: Number,
  name: String,
  description: String,
  category: String,
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;