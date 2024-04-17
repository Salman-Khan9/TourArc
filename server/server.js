const express = require ("express")
const mongoose = require("mongoose")
const cors = require("cors")
const route = require("./Routes/Users")
require("dotenv").config()
const app = express()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(route)

const Port = process.env.Port || 5000
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(Port,()=>{
        console.log(`Web is running on server port ${Port}`)
    })
})