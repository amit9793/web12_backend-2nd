const express = require("express");

const { register, login } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");



const moviesControler = require("./controllers/movies.controler");
const showsControler = require("./controllers/shows.controller");
const seatControler = require("./controllers/seat.controller");




const app = express();

app.use(express.json());

// app.use("/users", userController) // /register /login
app.post("/users", register);
app.post("/login", login);

app.use("/movies", moviesControler);
app.use("/shows", showsControler);
app.use("/seats", seatControler);



module.exports = app;
