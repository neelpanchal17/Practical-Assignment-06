require("dotenv").config();
const express = require('express');
const clubModel = require("../models/club");
const mongoose = require("mongoose");
const router = express.Router();
router.use(express.json());
mongoose
.connect(process.env.MONGOURL)
.then(()=>console.log("Mongo Db Connected!"));
router.get('/',(req,res)=> res.send("For The Club Information!!"));

//Insert Club Details.
router.post("/insert_club",(req,res)=>{
    const{newclub} = req.body;
    const addclub = clubModel.create(newclub);
    return res.json({data:"Club Added!!"});
});
//Update Club Title.
router.put("/update_club/update_club_title/:cname",async(req,res)=>{
    const cname = req.params.cname;
    const c_title = req.body.number_of_title;
    const uclub = await clubModel.findOneAndUpdate(
        {club_name:cname},
        {number_of_title:c_title},
        {new:true}
    );
    return res.json({data:"Club Title has been updated!"});
});
//Display Club's Details.
router.get("/list",async(req,res)=>{
    const club_list = await clubModel.find();
    return res.json({data:club_list});
});
//Delete Club's Details.
router.delete("/delete_club/:id",async(req,res)=>{
    const id = req.params.id;
    const deleteleague = await clubModel.findOneAndDelete({clubid:id});
    return res.json({data:"Club's Details Deleted Successfully!"});
});

module.exports = router;