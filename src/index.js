const express = require("express");

const register = require("./controllers/auth.controller");
const movieController = require("./controllers/movie.controller");
const theaterController = require("./controllers/theater.controller");
const showController = require("./controllers/show.controller");
const screenController = require("./controllers/screen.controller");
const seatsController = require("./controllers/seats.controller");



const app = express();

app.use(express.json());

app.use("/signup", register);
//app.post("/login", login);

app.use("/movie", movieController);
app.use("/theater", theaterController);
app.use("/show", showController);
app.use("/screen", screenController);
app.use("/seats", seatsController);


module.exports = app;
