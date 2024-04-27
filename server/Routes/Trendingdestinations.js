const express = require("express")
const TrendingDestinations = require("../Models/TrendingDestinations")
const TDroutes = express.Router()
TDroutes.post("/TDestinations",async(req,res)=>{
    try {
        const data = await TrendingDestinations.create(req.body)
        res.json(data).status(200)
    } catch (error) {
        res.status(400).json('error')
    }
})
TDroutes.get("/TDestinations",async(req,res)=>{
    try {
        const data = await TrendingDestinations.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json("error")
    }
})
module.exports = TDroutes