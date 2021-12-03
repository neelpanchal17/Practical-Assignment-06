require("dotenv").config();
const express = require('express');
const leagueModel = require("../models/league");
const mongoose = require("mongoose");
const router = express.Router();
router.use(express.json());
mongoose
.connect(process.env.MONGOURL)
.then(()=>console.log("Mongo Db Connected!"));
router.get('/',(req,res)=> res.send("For The League Information!!"));

//Insert League Information
router.post("/insert_league",(req,res)=>{
    const{newleague} = req.body;
    const addleague = leagueModel.create(newleague);
    return res.json({data:"League Added!!"});
});
//Update League's Name Information
router.put("/update_league/:lname",async(req,res)=>{
    const lname = req.params.lname;
    const league_name = req.body.league_name;
    const uleague = await leagueModel.findOneAndUpdate(
        {league_name:lname},
        {league_name:league_name},
        {new:true}
    );
    return res.json({data:"League Information has been updated!"});
});
//Update League's Club Numbers Information
router.put("/update_league/update_club_number/:lname",async(req,res)=>{
    const lname = req.params.lname;
    const o_county = req.body.origin_country;
    const t_clubs = req.body.totalclubs;
    const uleague = await leagueModel.findOneAndUpdate(
        {league_name:lname},
        {totalclubs:t_clubs},
        {new:true}
    );
    return res.json({data:"League Information has been updated!"});
});
//Display All League's Details.
router.get("/display_league_details",async(req,res)=>{
    const league_list = await leagueModel.find();
    return res.json({data:league_list});
});
//Delete League's Details.
router.delete("/delete_league_details/:id",async(req,res)=>{
    const id = req.params.id;
    const deleteleague = await leagueModel.findOneAndDelete({leagueid:id});
    return res.json({data:"League's Details Deleted Successfully!"});
});
module.exports = router;