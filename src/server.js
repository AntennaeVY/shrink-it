require("dotenv").config();

const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");

const routes = require("./routes/routes.js");
const { mongoose } = require("./database.js");

// Settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

// Static Files
app.use(express.static(path.join(__dirname, "./public")));

// Middlewares
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/", routes());

// Server
app.listen(app.get("port"), () => {
  console.log(`Listening on any ${app.get("port")}...`);
});
