const express = require('express');
const City= require("../models/city.model")
const router = express.Router();

router.get("",async(req,res)=>{
    console.log(req.session);
    try {
        let cities= await City.find().lean().exec();
        return res.status(200).send(cities);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = router;