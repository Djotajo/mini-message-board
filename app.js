const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const path = require("node:path");
const db = require("./db/queries");
const http = require("http");
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
