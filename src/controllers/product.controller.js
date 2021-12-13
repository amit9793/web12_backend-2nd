const express = require("express");

const Product = require("../models/product.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const user = req.user;

    const product = await Product.create({
      title: req.body.title,
      instructor: user.user._id,
      batch: req.body.batch,
    });

    return res.status(201).json({ product });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  const products = await Product.find().lean().exec();

  return res.send(products);
});

router.get("/:id", async (req, res) => {
  const products = await Product.find({"_id":req.params.id});
  return res.status(201).send(products);
});

module.exports = router;
