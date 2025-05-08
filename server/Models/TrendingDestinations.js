const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  picuri: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const TrendingDestinations = mongoose.model("Trending-Destination", schema);
module.exports = TrendingDestinations;
