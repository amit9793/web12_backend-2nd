const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    show: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("seat", seatSchema);
