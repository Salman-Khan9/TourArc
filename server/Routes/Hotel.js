const express = require("express");
const Hotel = require("../Models/Hotels");
const routes = express.Router();
routes.post("/hotel", async (req, res) => {
  try {
    const data = await Hotel.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json("error");
  }
});
routes.get("/hotels", async (req, res) => {
  try {
    const data = await Hotel.find().sort({ roomspace: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json("error");
  }
});
module.exports = routes;
