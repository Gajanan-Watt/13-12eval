const express = require("express");

const Seats = require("../models/seats.model")
const Show = require("../models/show.model");

const router = express.Router();

router.post("", async (req, res) => {
    try {
        
      const seats = await Seats.create(req.body);
  
      return res.status(201).send(seats);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });


  router.get("", async (req, res) => {
    try{
      const seats = await Seats.find().populate({path: "show_id", select: "total_seats"})
      .lean().exec();
      return res.send(seats);
    } catch (e){
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  
  router.get("/:id", async (req, res) => {
    try {
      const seats = await Show.findById(req.params.id)
      .lean().exec();
      //console.log(seats);
        let avail_seats = seats.total_seats;
      return res.send({avail_seats});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const seats = await Seats.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.send(seats);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const seats = await Seats.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
  
      return res.send(seats);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  module.exports = router;