const mongoose = require("mongoose");

const showsSchema = new mongoose.Schema(
  {
    timing: { type: Number, required: true },
    movies: { type: String, required: false },
    total_seats: { type: Number, required: false },
    screen: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("shows", showsSchema);
