const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    name: { type: String, required: true },
    actors: [{ type: String, required: true }],
    language: [{ type: String, required: true }],
    directors: [{ type: String, required: true }],
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    poster_urls: [{ type: String }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("movie", movieSchema);
