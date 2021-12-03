require("dotenv").config();
const express = require('express');
const managerModel = require("../models/manager");
const mongoose = require("mongoose");
const router = express.Router();
router.use(express.json());
mongoose
.connect(process.env.MONGOURL)
.then(()=>console.log("Mongo Db Connected!"));
router.get('/',(req,res)=> res.send("For The Manager Information!!"));

//Insert Manager Details.
router.post("/insert_manager",(req,res)=>{
    const{newmanager} = req.body;
    const addmanager = managerModel.create(newmanager);
    return res.json({data:"Manager Added!!"});
});
//Update Manager's Current Club.
router.put("/update_manager/update_current_club/:mname",async(req,res)=>{
    const mname = req.params.mname;
    const current_club1 = req.body.current_club;
    const umanager = await managerModel.findOneAndUpdate(
        {m_name:mname},
        {current_club:current_club1},
        {new:true}
    );
    return res.json({data:"Manager Detail's has been updated!"});
});
//Display Manager's Details.
router.get("/listmanager",async(req,res)=>{
    const manager_list = await managerModel.find();
    return res.json({data:manager_list});
});
//Delete Manager's Details.
router.delete("/delete_manager/:id",async(req,res)=>{
    const id = req.params.id;
    const deletemanager = await managerModel.findOneAndDelete({managerid:id});
    return res.json({data:"Manager's Details Deleted Successfully!"});
});


module.exports = router;