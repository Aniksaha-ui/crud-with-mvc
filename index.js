const express = require("express");
const app = express();

app.use(express.json());
//import all routes

const products = require("./routes/product");

app.use("/api", products);

module.exports = app;
