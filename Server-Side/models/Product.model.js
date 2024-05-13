const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  image1: String,
  image2: String,
  title: String,
  price: Number,
  name: String,
  gender: String,
  brand: String,
  description: String,
  category: String,
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;