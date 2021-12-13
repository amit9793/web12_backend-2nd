const express = require("express");

const Shows = require("../models/shows.model");

const router = express.Router();

router.post("", async (req, res) => {
  const user = await Shows.create(req.body);
  return res.status(201).send(user);
});

router.get("", async (req, res) => {
 const a =  req.body.movies;
 const products = await Shows.find({movies:req.body.movies});
 console.log(a);
  return res.status(201).send(products);
});

module.exports = router;
