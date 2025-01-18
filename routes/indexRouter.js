const { Router } = require("express");

const indexRouter = Router();

const newController = require("../controllers/newController");

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

// const messages = Array.from(newController.getAllMessages());
console.log("ne dodje na red");

indexRouter.get("/", async (req, res) => {
  const messages = await newController.getAllMessages();
  console.log("test");
  res.render("index", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.authorsName,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  if (messageId >= 0 && messageId < messages.length) {
    res.render("message", { message: messages[messageId] });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = indexRouter;
