const { Router } = require("express");

const newRouter = Router();

newRouter.get("/new", (req, res) => res.render("form"));
newRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.authorsName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newRouter;
