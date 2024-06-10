const express = require("express");
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const UserModel = require("../models/user.model");

const userRoute = Router();

// Signup route
userRoute.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Login route
userRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Create and send JWT token
    const token = jwt.sign({ id: user._id }, "hack", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Get all users route
userRoute.get("/users", async (req, res) => {
  try {
    // Retrieve all user data from the database
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error("Error in getting user data:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Edit user route
userRoute.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    // Find the user by ID and update the details
    await UserModel.findByIdAndUpdate(id, { name, email });

    res.json({ msg: "User updated successfully" });
  } catch (error) {
    console.error("Error in updating user:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Delete user route
userRoute.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user by ID and delete
    await UserModel.findByIdAndDelete(id);

    res.json({ msg: "User deleted successfully" });
  } catch (error) {
    console.error("Error in deleting user:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Get single user route
userRoute.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user by ID
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error in getting single user:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = userRoute;
