const express = require("express");

const Movies = require("../models/movies_model");

const router = express.Router();


  router.post("", async (req, res) => {
    const user = await Movies.create(req.body);
    return res.status(201).send(user);
  });

  router.get("", async (req, res) => {
    const a =  req.body.actors;
    const products = await Movies.find({actors:req.body.actors});
   // console.log(a);
     return res.status(201).send(products);
   });


  module.exports = router;

  