const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

module.exports = function () {
  router.get("/", controller.getRoot);
  router.post("/shrinkit", controller.postShrinkIt);
  router.get("/urls/:id", controller.getShortUrl);
  router.get("/404", controller.get404);
  router.get("/:params", controller.getDefault);

  return router;
};
