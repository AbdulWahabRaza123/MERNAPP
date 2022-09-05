require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(require("./router/auth"));
require("./conn");
const port = process.env.PORT || 5000;
const middleware = (req, res, next) => {
  console.log("Hello Middleware");
  next();
};
//to make frontend and backend on one stage
if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}
app.listen(port, () => {
  console.log("Listening from backend to port ", port);
});
