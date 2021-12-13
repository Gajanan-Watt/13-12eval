const mongoose = require("mongoose");


const seatsSchema = new mongoose.Schema(
    {
      show_id: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "show",
          required: true,
        },
      
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("seats", seatsSchema); 
  
