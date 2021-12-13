const express = require("express");

const Screen = require("../models/screen.model")

const router = express.Router();

router.post("", async (req, res) => {
    try {
      const screen = await Screen.create(req.body);
  
      return res.status(201).send(screen);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });


  router.get("", async (req, res) => {
    try{
      const screen = await Screen.find().populate({path: "theater_id", select: "location"})
      .lean().exec();
      return res.send(screen);
    } catch (e){
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  
  router.get("/:id", async (req, res) => {
    try {
      const screen = await Screen.findById(req.params.id)
      .lean().exec();
      //console.log(theater.author_id[0].first_name);
      return res.send({screen});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const screen = await Screen.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.send(screen);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const screen = await Screen.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
  
      return res.send(screen);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  module.exports = router;