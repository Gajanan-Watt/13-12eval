const express = require("express");

const Show = require("../models/show.model")
const User = require("../models/user.model");

const router = express.Router();

router.post("", async (req, res) => {
    try {
      const show = await Show.create(req.body);
  
      return res.status(201).send(show);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });


  router.get("", async (req, res) => {
    try{
      const show = await Show.find().populate({path: "screen_id", select: "name"}).populate({path: "movie_id", select: "name"})
      .lean().exec();
      return res.send(show);
    } catch (e){
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  
  router.get("/:id", async (req, res) => {
    try {
      const show = await Show.find()
      .lean().exec();
        console.log(show);
        let movie_show;
        for(let  i = 0; i < show.length; i++){
            if(show[i].movie_id == req.params.id){
                movie_show = show[i];
            }
        }
      return res.send({movie_show});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("/:id/:nearest", async (req, res) => {
    try {
      const show = await Show.find()
      .lean().exec();
      const user = await User.find().lean().exec();
    //   for(let i = 0; i < user.length; i++){
    //       if(user.)
    //   }
        //console.log(show);
        let movie_show;
        for(let  i = 0; i < show.length; i++){
            if(show[i].movie_id == req.params.id){
                movie_show = show[i];
            }
        }
      return res.send({movie_show});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      const show = await Show.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.send(show);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const show = await Show.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
  
      return res.send(show);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  module.exports = router;