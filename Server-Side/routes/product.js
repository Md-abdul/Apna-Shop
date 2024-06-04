const { Router } = require("express");
const ProductModel = require("../models/Product.model");

const productRoutes = Router();

productRoutes.post("/productpost", async (req, res) => {
  try {
    const {
      image1,
      image2,
      title,
      price,
      name,
      gender,
      brand,
      description,
      category,
    } = req.body;
    const productItem = new ProductModel({
      image1,
      image2,
      title,
      price,
      name,
      gender,
      brand,
      description,
      category,
    });
    await productItem.save();
    res.status(201).send(productItem);
  } catch (error) {
    console.error("Error adding product:", error); // More detailed error message
    res.status(500).send("Error adding product");
  }
});

productRoutes.get("/productget", async (req, res) => {
  try {
    const productItems = await ProductModel.find();
    res.status(200).send(productItems);
  } catch (error) {
    console.error("Error fetching product items:", error); // More detailed error message
    res.status(500).send("Error fetching product items");
  }
});

productRoutes.get("/productget/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log("Fetching product with ID:", productId); // Add this line for debugging
    const productItem = await ProductModel.findById(productId);
    if (!productItem) {
      return res.status(404).send("Product not found");
    }
    res.status(200).send(productItem);
  } catch (error) {
    console.error("Error fetching product:", error); // More detailed error message
    res.status(500).send("Error fetching product");
  }
});

productRoutes.put("/productupdate/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = req.body;
    const result = await ProductModel.findByIdAndUpdate(
      productId,
      updatedProduct,
      { new: true }
    );
    res.status(200).send(result);
  } catch (error) {
    console.error("Error updating product:", error); // More detailed error message
    res.status(500).send("Error updating product");
  }
});

productRoutes.delete("/productdelete/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    await ProductModel.findByIdAndDelete(productId);
    res.status(200).send("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error); // More detailed error message
    res.status(500).send("Error deleting product");
  }
});

module.exports = productRoutes;
