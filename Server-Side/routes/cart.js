const { Router } = require("express");
const CartModel = require("../models/cart.model");

const cartRoutes = Router();

// Route to handle adding a product to the cart
cartRoutes.post("/cartpost", async (req, res) => {
  try {
    const { image1, title, price, name, description, category } = req.body;
    const cartItem = new CartModel({
      image1,
      title,
      price,
      name,
      description,
      category,
    });
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

module.exports = cartRoutes;
