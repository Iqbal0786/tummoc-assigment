const express = require('express');
const City= require("../models/city.model")
const router = express.Router();

router.get("",async(req,res)=>{
  
    try {
        let cities= await City.find().populate({path:"user_id" , select:["name" ,'email']}).lean().exec();
        return res.status(200).send(cities);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

router.post("",async(req,res)=>{

    try {
        let city= await City.create(req.body);
        return res.status(201).send(city);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
module.exports = router;