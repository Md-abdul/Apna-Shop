const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const cartRoutes = require("./routes/cart");
const userRoute = require("./routes/userRoutes");
const productRoutes = require("./routes/product"); 
require('dotenv').config();

// Verify environment variable loading
console.log(process.env.mongoURI); // Should print the MongoDB URI

const connect = async () => {
  try {
    const mongoURI = process.env.mongoURI;
    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in the environment variables.");
    }
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error); 
  }
};

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to Apna Shop!");
});

app.use("/user", userRoute);
app.use("/cart", cartRoutes);
app.use("/product", productRoutes);

app.listen(2000, () => {
  connect();
  console.log("Server is running on port 2000");
});
