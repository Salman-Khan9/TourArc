const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    hotelname:{
        type : String,
        required: true
    },
    city:{
    type : String,
    required:true
    },
    roomspace:{
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true
    }  

})
const Hotel = mongoose.model("Hotels",schema)
module.exports = Hotel