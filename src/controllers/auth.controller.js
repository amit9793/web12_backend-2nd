require("dotenv").config();

const jwt = require("jsonwebtoken");// token create karne ke liye

const User = require("../models/user.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);// salt jisko token incrept karke use karega
};


//        ye register karne ke liye

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();//yaha ham log check kar rahe hai ki email pahle se hai ki nahi
  
    if (user) // agar user hai to error send karo
      return res.status(400).json({
        status: "failed",
        message: " Please provide a different email address",
      });

    //other wise email create karo

    user = await User.create(req.body);// password plan text me hoga so salt milane ke liye usermodel me send karenge
  
    // frontant se data aayega so token create karo
    const token = newToken(user);
    res.status(201).json({ user, token });// yaha ham user our token return kar rahe hai


  } 
  catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }


};

//   ye login karne ke liye


const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });/// user find karo


    
    if (!user)// agar user nahi hai to error throw karo// user.model se true false lene ke baad
      return res.status(400).json({
        status: "failed",
        message: " Please provide correct email address and password",
      });


    const match = await user.checkPassword(req.body.password);

    
    if (!match)
      return res.status(400).json({
        status: "failed",
        message: " Please provide correct email address and password",
      });


    const token = newToken(user);
    res.status(201).json({ user, token });
    
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

module.exports = { register, login };
