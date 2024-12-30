const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.render("index", { messages: messages, poruka: poruka });
// });
app.get("/", indexRouter);

app.get("/new", newRouter);
app.post("/new", indexRouter);

app.listen(PORT, () => {
  console.log("App running on port 3000");
});
