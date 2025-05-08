const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  picuri: {
    type: String,
  },
});
const specialoffer = mongoose.model("offers", schema);
module.exports = specialoffer;
