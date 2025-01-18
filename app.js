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
app.use("/new", indexRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

// const requestHandler = async (req, res) => {
//   const result = await db.getAllRows();
//   const id = result[0].id;
//   console.log(result);
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(result));
// };

// http.createServer(requestHandler).listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// const requestHandler = async (req, res) => {
//   const result = await db.getAllRows();
//   if (result.length === 0) {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Item not found");
//     return;
//   }
//   const { id, name, value } = result[0];
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ id, name, value }));
// };
