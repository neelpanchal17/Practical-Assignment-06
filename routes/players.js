require("dotenv").config();
const express = require('express');
const playerModel = require("../models/players");
const mongoose = require("mongoose");
const router = express.Router();
router.use(express.json());
mongoose
.connect(process.env.MONGOURL)
.then(()=>console.log("Mongo Db Connected!"));
router.get('/',(req,res)=> res.send("For The Players Information!!"));
//Insert Players Details.
router.post("/insert_player",(req,res)=>{
    const{newplayer} = req.body;
    const addplayer = playerModel.create(newplayer);
    return res.json({data:"Player Added!!"});
});
//Update Player's Current Club.
router.put("/update_player/update_current_club/:pname",async(req,res)=>{
    const pname = req.params.pname;
    const current_club1 = req.body.current_club;
    const uplayer = await playerModel.findOneAndUpdate(
        {p_name:pname},
        {current_club:current_club1},
        {new:true}
    );
    return res.json({data:"Player's Details has been updated!"});
});
//Display Player's Details.
router.get("/listplayer",async(req,res)=>{
    const player_list = await playerModel.find();
    return res.json({data:player_list});
});
//Delete Player's Details.
router.delete("/delete_player/:id",async(req,res)=>{
    const id = req.params.id;
    const deleteplayer = await playerModel.findOneAndDelete({playerid:id});
    return res.json({data:"Player's Details Deleted Successfully!"});
});


module.exports = router;