const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getAllRows();
  return messages;
}

async function getMessageById(messageId) {
  try {
    const message = await db.getRow(messageId);

    if (!message) {
      console.error(`Message with ID ${messageId} not found.`);
      return null;
    }

    return message;
  } catch (error) {
    console.error(`Error fetching message with ID ${messageId}:`, error);
    throw error;
  }
}

async function messageCreatePost(req, res) {
  const { author, message } = req.body;
  await db.insertRow(author, message);
  res.redirect("/");
}

// Halt for now
// async function messageDeleteById(req, res) {
//   const id = req.body.id;
//   await db.deleteRow(id);
//   res.redirect("/");
// }

module.exports = {
  getAllMessages,
  getMessageById,
  messageCreatePost,
};
