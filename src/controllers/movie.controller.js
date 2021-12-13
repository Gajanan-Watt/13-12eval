const express = require("express");

const Movie = require("../models/movie.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", authenticate, async (req, res) => {
    try {
      const user = req.user;

      const movie = await Movie.create({
        name: req.body.name,
        actors: req.body.actors,
        language: req.body.language,
        directors: req.body.directors,
        poster_urls: ["www.google.com"],
        user: user.user._id,
      });

      return res.status(201).json({ movie });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async (req, res) => {
  const movie = await Movie.find().lean().exec();

  return res.send({movie});
});

router.get("/:name", async (req, res) => {
  const movie = await Movie.find().lean().exec();
  let actor_movie;
  for(let i = 0; i < movie.length; i++){
    for(let j = 0; j < movie[i].actors.length; j++){
      if(movie[i].actors[j] == req.params.name){
        actor_movie = movie;
      }
    }
  }

  return res.send({actor_movie});
});

module.exports = router;
