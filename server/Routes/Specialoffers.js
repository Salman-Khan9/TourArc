const express = require("express")
const specialoffer = require("../Models/Specialoffers")
const specialroute = express.Router()
specialroute.post("/offer",async(req,res)=>{
    try {
        const data = await specialoffer.create(req.body)
        res.json(data).status(200)
    } catch (error) {
        res.json("error").status(400)
        
    }
})
specialroute.get("/getoffer",async(req,res)=>{
    try {
        const data = await specialoffer.find()
        res.json(data).status(200)
    } catch (error) {
        res.json("error").status(400)
        
    }
})
module.exports = specialroute