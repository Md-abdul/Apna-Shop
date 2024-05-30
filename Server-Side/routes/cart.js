const { Router } = require("express");
const CartModel = require("../models/cart.model");
const authenticate = require("../Middleware/Middleware");

const cartRoutes = Router();

// Route to handle adding a product to the cart
cartRoutes.post("/cartpost", async (req, res) => {
    try {
      const { image1, title, price, name, description, category } = req.body;
      const cartItem = new CartModel({ image1, title, price, name, description, category });
      await cartItem.save();
      res.status(201).send(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error adding product to cart");
    }
  });



  // Route to handle fetching all cart items
  cartRoutes.get("/cartget", async (req, res) => {
    try {
      const cartItems = await CartModel.find();
      res.status(200).send(cartItems);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching cart items");
    }
  });

  cartRoutes.delete("/cartdelete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedItem = await CartModel.findByIdAndDelete(id);
      if (!deletedItem) {
        return res.status(404).send("Product not found in the cart");
      }
      res.status(200).send(deletedItem);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting product from cart");
    }
  });

  module.exports = cartRoutes




// const { Router } = require("express");
// const CartModel = require("../models/cart.model");
// const UserModel = require("../models/user.model");
// const authenticate = require("../Middleware/Middleware");

// const cartRoutes = Router();

// // Middleware to authenticate user
// cartRoutes.use(authenticate);

// // Route to handle adding a product to the cart
// cartRoutes.post("/cartpost", async (req, res) => {
//   try {
//     const { image1, title, price, name, description, category } = req.body;
//     const userId = req.user.id; // Extract user ID from the authenticated request

//     const cartItem = new CartModel({
//       image1,
//       title,
//       price,
//       name,
//       description,
//       category,
//       user: userId
//     });

//     await cartItem.save();

//     // Update user's cart array
//     await UserModel.findByIdAndUpdate(userId, { $push: { cart: cartItem._id } });

//     res.status(201).send(cartItem);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error adding product to cart");
//   }
// });

// // Route to handle fetching all cart items for the logged-in user
// cartRoutes.get("/cartget", async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const cartItems = await CartModel.find({ user: userId });
//     res.status(200).send(cartItems);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching cart items");
//   }
// });

// // Route to handle deleting a cart item
// cartRoutes.delete("/cartdelete/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const userId = req.user.id;

//     const deletedItem = await CartModel.findOneAndDelete({ _id: id, user: userId });
//     if (!deletedItem) {
//       return res.status(404).send("Product not found in the cart");
//     }

//     // Update user's cart array
//     await UserModel.findByIdAndUpdate(userId, { $pull: { cart: id } });

//     res.status(200).send(deletedItem);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error deleting product from cart");
//   }
// });

// module.exports = cartRoutes;
