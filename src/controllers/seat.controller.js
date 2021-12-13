const express = require("express");

const Seat = require("../models/seat.model");
const show = require("../models/shows.model")

const router = express.Router();

router.post("", async (req, res) => {
  const user = await Seat.create(req.body);
  return res.status(201).send(user);
});


router.get("", async (req, res) => {
  const a =  req.body.show;
  const products = await Seat.find({movies:req.body.show});

  const amit = await show.findById(a);
  console.log(amit);
   return res.status(201).send(amit);
 });

module.exports = router;
