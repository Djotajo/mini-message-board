const sql = require("./sql");

async function getAllRows() {
  const rows = await sql`SELECT * FROM mini_messages`;
  console.log(rows);
  console.log(typeof rows);
  return rows;
}

async function getRow(id) {
  const row = await sql`SELECT * FROM playing_with_neon WHERE id =${id}`;
  return row;
}

async function insertRow(author, message, time) {
  await sql`INSERT INTO playing_with_neon (author, message, time) VALUES (${author}, ${message}, ${time})`;
}

async function deleteRow(id) {
  await sql`DELETE FROM playing_with_neon WHERE id = ${id}`;
}
module.exports = { getAllRows, getRow, insertRow, deleteRow };

// const pool = require("./sql");

// async function getAllUsernames() {
//   const { rows } = await pool.query("SELECT * FROM usernames");
//   return rows;
// }

// async function searchUsernames(query) {
//   const { rows } = await pool.query(
//     "SELECT * FROM usernames WHERE username LIKE ($1)",
//     [`%${query}%`]
//   );
//   return rows;
// }

// async function insertUsername(username) {
//   await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// }

// async function deleteAllUsers() {
//   await pool.query("DELETE FROM usernames");
// }

// module.exports = {
//   getAllUsernames,
//   searchUsernames,
//   insertUsername,
//   deleteAllUsers,
// };
