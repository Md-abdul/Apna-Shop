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




// const mongoose = require("mongoose");

// const CartSchema = mongoose.Schema({
//   image1: String,
//   title: String,
//   price: Number,
//   name: String,
//   description: String,
//   category: String,
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user',
//     required: true
//   }
// });

// const CartModel = mongoose.model("cart", CartSchema);

// module.exports = CartModel;
