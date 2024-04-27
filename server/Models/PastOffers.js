const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    offername :{
        type :String,
        required:true,
    },
    picuri:{
     type:String,
     required:true,
    },
})
const Offer = mongoose.model("PastOffers",schema)
module.exports = Offer