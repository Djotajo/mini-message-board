const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const poruka = "tajna poruka";

indexRouter.get("/", (req, res) =>
  res.render("index", { messages: messages, poruka: poruka })
);
indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.authorsName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
