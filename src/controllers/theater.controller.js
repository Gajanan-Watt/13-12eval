const express = require("express");

const Theater = require("../models/theater.model")

const router = express.Router();

// ------------ theaterS CRUD -----------------
router.post("", async (req, res) => {
    try {
      const theater = await Theater.create(req.body);
  
      return res.status(201).send(theater);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });


  router.get("", async (req, res) => {
    try{
      const theaters = await Theater.find()
      .lean().exec();
      return res.send(theaters);
    } catch (e){
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  
//   router.get("/:id", async (req, res) => {
//     try {
//       const theaters = await Theater.find()
//       .populate({path: "author_id", select: "first_name"})
//       .lean().exec();
//       let arr = [];
//       for(let i = 0; i < theaters.length; i++){
//         for(let j = 0; j < theaters[i].author_id.length; j++){
//           if(req.params.id == theaters[i].author_id[j].first_name){
//             //console.log(theaters[i]);
//              arr.push(theaters[i]);
          
//           }
//         }
//       }
//       //console.log({arr});
//       return res.send({arr});
//       //console.log(theaters[0].author_id[0].first_name);
//       //return res.send({theaters});
//     } catch (e) {
//       return res.status(500).json({ message: e.message, status: "Failed" });
//     }
//   });
  
  router.get("/:id", async (req, res) => {
    try {
      const theater = await Theater.findById(req.params.id)
      .lean().exec();
      //console.log(theater.author_id[0].first_name);
      return res.send({theater});
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const theater = await Theater.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
  
      return res.send(theater);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const theater = await Theater.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
  
      return res.send(theater);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

  module.exports = router;