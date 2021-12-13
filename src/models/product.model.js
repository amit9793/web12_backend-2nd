const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    batch: { type: String, required: true },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    image_urls: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("product", productSchema);
