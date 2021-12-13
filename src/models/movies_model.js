const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    actors: { type: String, required: false },
    language: { type: String, required: false },
    directors: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("movies", moviesSchema);
