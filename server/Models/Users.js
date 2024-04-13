const mongoose = require("mongoose")
const schema = new mongoose.Schema({
   name:{
    type : String,
    required : true
   },
      email:{
        type:String,
        required : true
      },
      password:{
        type:String,
        required : true
      },
}
   
)
const User = mongoose.model("TourArc-Users",schema)
module.exports = User