// const { Pool } = require("pg");

// module.exports = new Pool({
//   host: "localhost", // or wherever the db is hosted
//   user: process.env.DB_USER,
//   database: "top_users",
//   password: process.env.USER_PASSWORD,
//   port: 5432, // The default port
// });
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

module.exports = sql;
