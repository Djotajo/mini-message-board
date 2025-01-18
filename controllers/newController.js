const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getAllRows();
  return messages;
}

async function getMessageById(req, res) {
  const id = req.body.id;
  const message = await db.getRow(id);
  return message;
}

async function messageCreatePost(req, res) {
  const { author, message, time } = req.body;
  await db.insertRowauthor, message, time();
  res.redirect("/");
}

async function messageDeleteById(req, res) {
  const id = req.body.id;
  await db.deleteRow(id);
  res.redirect("/");
}

module.exports = {
  getAllMessages,
  getMessageById,
  messageCreatePost,
  messageDeleteById,
};

// const db = require("../db/queries");

// async function getAllMessages(req, res) {
//   try {
//     const messages = await db.getAllRows();
//     return res.json(messages); // Send the messages as a JSON response
//   } catch (error) {
//     res.status(500).send("Error fetching messages");
//   }
// }

// async function getMessageById(req, res) {
//   try {
//     const { id } = req.params; // Use `params` for IDs passed in the route (e.g., `/message/:id`)
//     const message = await db.getRow(id);
//     if (!message) {
//       return res.status(404).send("Message not found");
//     }
//     return res.json(message); // Send the message as a JSON response
//   } catch (error) {
//     res.status(500).send("Error fetching message");
//   }
// }

// async function messageCreatePost(req, res) {
//   try {
//     const { author, message, time } = req.body;
//     await db.insertRow(author, message, time); // Fixed function call syntax
//     res.redirect("/");
//   } catch (error) {
//     res.status(500).send("Error creating message");
//   }
// }

// async function messageDeleteById(req, res) {
//   try {
//     const { id } = req.body; // Assuming `id` is in the body
//     await db.deleteRow(id);
//     res.redirect("/");
//   } catch (error) {
//     res.status(500).send("Error deleting message");
//   }
// }

// module.exports = {
//   getAllMessages,
//   getMessageById,
//   messageCreatePost,
//   messageDeleteById,
// };
