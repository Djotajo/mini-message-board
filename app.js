const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.use("/new", newRouter);
app.use("/new", indexRouter);

app.listen(PORT, () => {
  console.log("App running on port 3000");
});
