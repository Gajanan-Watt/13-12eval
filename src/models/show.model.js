const mongoose = require("mongoose");


const showSchema = new mongoose.Schema(
    {
      timing: { type: String, required: true },
      movie_id: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "movie",
          required: true,
        },
        total_seats: {type: Number, require: true},
        screen_id: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "screen",
          required: true,
        },
      
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("show", showSchema); 
  
