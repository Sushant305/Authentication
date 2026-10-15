const mongoose = require("mongoose");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createTokens = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// this is use for the login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // create tokens
    const tokens = createTokens(user._id);
    res.status(200).json({ email, tokens });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } 
};

// this is use for the sign up user
exports.signUpUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    // create tokens
    const tokens = createTokens(user._id);
    res.status(200).json({ email, tokens });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
