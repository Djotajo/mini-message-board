const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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

// app.get("/", (req, res) => {
//   res.render("index", { messages: messages, poruka: poruka });
// });
app.get("/", indexRouter);

app.get("/new", (req, res) => {
  res.render("new");
});

app.listen(PORT, () => {
  console.log("App running on port 3000");
});
