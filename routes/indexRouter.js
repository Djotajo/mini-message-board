const { Router } = require("express");

const indexRouter = Router();

const newController = require("../controllers/newController");

indexRouter.get("/", async (req, res) => {
  const messages = await newController.getAllMessages();
  res.render("index", { messages: messages });
});

indexRouter.get("/message/:id", async (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = await newController.getMessageById(messageId);
  res.render("message", { message: message });
});

module.exports = indexRouter;
