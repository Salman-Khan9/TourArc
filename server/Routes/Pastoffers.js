const express = require("express")
const Offer = require("../Models/PastOffers")
const Poffersroute = express.Router()
Poffersroute.post("/Pastoffers" ,async(req,res)=>{
    try {
        const data = await Offer.create(req.body)
        res.json(data).status(200)
    } catch (error) {
        res.status(400).json("error")
    }
})
Poffersroute.get("/Pastoffers",async(req,res)=>{
    try {
        const data = await Offer.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json("error")
    }
})
module.exports = Poffersroute