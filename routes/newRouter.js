const { Router } = require("express");

const newRouter = Router();
const newController = require("../controllers/newController");

newRouter.get("/", (req, res) => res.render("form"));

newRouter.post("/", newController.messageCreatePost);

module.exports = newRouter;
