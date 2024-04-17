const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../Models/Users");
const route = express.Router();
route.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname ,email, password } = req.body;
    if (!firstname || !email || !password) {
      res.status(400).json("please fill the required fields ");
    }
    const checkexistingemail = await User.findOne({ email });
    if (checkexistingemail) {
      res.json("Email already registered");
    }
    const hashedpass = await bcrypt.hash(password, 10);

    const data = await User.create({ firstname,lastname, email, password: hashedpass });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json("Error occured");
  }
});
route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json("please fill the required fileds");
    }
    const data = await User.findOne({ email });
    if (!data) {
      res.status(400).json("incorrect email");
    }
    const hashedpassword = data.password;
    const verifypassword = await bcrypt.compare(password, hashedpassword);
    if (!verifypassword) {
      res.status(400).json("incorrect password");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json("Error while logging-in");
  }
});
module.exports = route;
